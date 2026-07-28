"use client";

import { useEffect } from "react";

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

export function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-heading"),
    );
    const media = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-media]"),
    );
    const cursorCards = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-cursor-card"),
    );

    root.classList.add("motion-ready");

    let revealObserver: IntersectionObserver | null = null;
    if (reducedMotion.matches) {
      headings.forEach((heading) => heading.classList.add("is-revealed"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );
      headings.forEach((heading) => revealObserver?.observe(heading));
    }

    let mediaFrame = 0;
    const updateMedia = () => {
      mediaFrame = 0;
      const viewportHeight = window.innerHeight;
      const motionFactor =
        window.innerWidth <= 780 ? 0.45 : window.innerWidth <= 1050 ? 0.68 : 1;

      media.forEach((item) => {
        const panel =
          item.closest<HTMLElement>("[data-scroll-panel]") ??
          item.parentElement;
        if (!panel) return;

        const rect = panel.getBoundingClientRect();
        const progress = clamp(
          (viewportHeight - rect.top) / (viewportHeight + rect.height),
          0,
          1,
        );
        const distance = Number(item.dataset.scrollDistance ?? 64);
        const translateY = (0.5 - progress) * distance * motionFactor;
        const scale =
          1 - 0.05 * motionFactor + progress * 0.15 * motionFactor;
        const centreStrength = 1 - Math.abs(progress - 0.5) * 2;
        const opacity = 0.8 + Math.max(0, centreStrength) * 0.2;

        item.style.setProperty("--motion-y", `${translateY.toFixed(2)}px`);
        item.style.setProperty("--motion-scale", scale.toFixed(4));
        item.style.setProperty("--motion-opacity", opacity.toFixed(3));
      });
    };

    const scheduleMediaUpdate = () => {
      if (mediaFrame) return;
      mediaFrame = window.requestAnimationFrame(updateMedia);
    };

    updateMedia();
    window.addEventListener("scroll", scheduleMediaUpdate, { passive: true });
    window.addEventListener("resize", scheduleMediaUpdate, { passive: true });

    const cursorCleanups: Array<() => void> = [];
    if (finePointer.matches && !reducedMotion.matches) {
      cursorCards.forEach((card) => {
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
          card.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
          card.classList.add("is-cursor-active");
        };
        const leave = () => card.classList.remove("is-cursor-active");

        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cursorCleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });
    }

    let smoothFrame = 0;
    let smoothing = false;
    let current = window.scrollY;
    let target = current;

    const desktopSmoothScroll = () =>
      !reducedMotion.matches &&
      finePointer.matches &&
      window.innerWidth > 900 &&
      navigator.maxTouchPoints === 0;

    const stopSmoothing = () => {
      if (smoothFrame) window.cancelAnimationFrame(smoothFrame);
      smoothFrame = 0;
      smoothing = false;
      current = window.scrollY;
      target = current;
      root.classList.remove("is-smooth-scrolling");
    };

    const smoothStep = () => {
      const difference = target - current;
      current += difference * 0.18;
      window.scrollTo(0, current);

      if (Math.abs(difference) < 0.45) {
        window.scrollTo(0, target);
        stopSmoothing();
        return;
      }

      smoothFrame = window.requestAnimationFrame(smoothStep);
    };

    const onWheel = (event: WheelEvent) => {
      if (
        !desktopSmoothScroll() ||
        event.ctrlKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        (event.target instanceof Element &&
          event.target.closest("[data-native-scroll]"))
      ) {
        return;
      }

      event.preventDefault();
      const deltaMultiplier = event.deltaMode === 1 ? 18 : 1;
      const delta = clamp(event.deltaY * deltaMultiplier, -220, 220);
      const maximum = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      if (!smoothing) {
        current = window.scrollY;
        target = current;
      }

      target = clamp(target + delta, 0, maximum);
      if (!smoothing) {
        smoothing = true;
        root.classList.add("is-smooth-scrolling");
        smoothFrame = window.requestAnimationFrame(smoothStep);
      }
    };

    const cancelForNativeInput = (event: KeyboardEvent) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
          " ",
        ].includes(event.key)
      ) {
        stopSmoothing();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", cancelForNativeInput);
    window.addEventListener("pointerdown", stopSmoothing, { passive: true });

    return () => {
      revealObserver?.disconnect();
      cursorCleanups.forEach((cleanup) => cleanup());
      window.cancelAnimationFrame(mediaFrame);
      stopSmoothing();
      window.removeEventListener("scroll", scheduleMediaUpdate);
      window.removeEventListener("resize", scheduleMediaUpdate);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", cancelForNativeInput);
      window.removeEventListener("pointerdown", stopSmoothing);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
