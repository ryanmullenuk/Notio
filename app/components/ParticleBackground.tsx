"use client";

import { useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
};

type SurfaceState = {
  element: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  particles: Particle[];
  pointer: { x: number; y: number; active: boolean };
  width: number;
  height: number;
  visible: boolean;
};

const surfaceSelector = [
  ".hero",
  ".section-dark",
  ".service-hero",
  ".service-cta",
  ".policy-hero",
  ".coming-soon-hero",
  ".site-footer",
].join(",");

const particleColours = [
  "rgba(255, 255, 255, 0.72)",
  "rgba(255, 255, 255, 0.54)",
  "rgba(255, 255, 255, 0.42)",
  "rgba(239, 178, 25, 0.64)",
];

export function ParticleBackground() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const mobile = window.matchMedia("(max-width: 780px)").matches;

    const states = Array.from(
      document.querySelectorAll<HTMLElement>(surfaceSelector),
    ).map<SurfaceState | null>((element) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return null;

      canvas.className = "particle-surface";
      canvas.setAttribute("aria-hidden", "true");
      element.classList.add("particle-surface-host");
      element.prepend(canvas);

      return {
        element,
        canvas,
        context,
        particles: [],
        pointer: { x: -1000, y: -1000, active: false },
        width: 0,
        height: 0,
        visible: true,
      };
    }).filter((state): state is SurfaceState => state !== null);

    const createParticles = (state: SurfaceState) => {
      const density = mobile ? 52000 : 30000;
      const minimum = mobile ? 10 : 16;
      const maximum = mobile ? 28 : 52;
      const count = Math.max(
        minimum,
        Math.min(maximum, Math.round((state.width * state.height) / density)),
      );
      const speed = mobile ? 0.09 : 0.16;

      state.particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * state.width,
        y: Math.random() * state.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: 0.8 + Math.random() * 0.75,
        colour: particleColours[index % particleColours.length],
      }));
    };

    const resizeSurface = (state: SurfaceState) => {
      const width = state.element.clientWidth;
      const height = state.element.clientHeight;
      if (width < 1 || height < 1) return;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      state.width = width;
      state.height = height;
      state.canvas.width = Math.round(width * pixelRatio);
      state.canvas.height = Math.round(height * pixelRatio);
      state.canvas.style.width = `${width}px`;
      state.canvas.style.height = `${height}px`;
      state.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles(state);
    };

    const drawConnection = (
      context: CanvasRenderingContext2D,
      firstX: number,
      firstY: number,
      secondX: number,
      secondY: number,
      distance: number,
      range: number,
      strength = 1,
    ) => {
      context.beginPath();
      context.moveTo(firstX, firstY);
      context.lineTo(secondX, secondY);
      context.strokeStyle = `rgba(255, 255, 255, ${
        ((range - distance) / range) * 0.15 * strength
      })`;
      context.lineWidth = 0.65;
      context.stroke();
    };

    const renderSurface = (state: SurfaceState) => {
      const { context, width, height } = state;
      context.clearRect(0, 0, width, height);

      state.particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -10 || particle.x > width + 10) {
            particle.vx *= -1;
          }
          if (particle.y < -10 || particle.y > height + 10) {
            particle.vy *= -1;
          }
        }

        context.beginPath();
        context.fillStyle = particle.colour;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let next = index + 1; next < state.particles.length; next += 1) {
          const neighbour = state.particles[next];
          const xDistance = particle.x - neighbour.x;
          const yDistance = particle.y - neighbour.y;
          const distance = Math.hypot(xDistance, yDistance);

          if (distance < 124) {
            drawConnection(
              context,
              particle.x,
              particle.y,
              neighbour.x,
              neighbour.y,
              distance,
              124,
            );
          }
        }

        if (state.pointer.active) {
          const xDistance = particle.x - state.pointer.x;
          const yDistance = particle.y - state.pointer.y;
          const distance = Math.hypot(xDistance, yDistance);

          if (distance < 155) {
            drawConnection(
              context,
              particle.x,
              particle.y,
              state.pointer.x,
              state.pointer.y,
              distance,
              155,
              1.45,
            );
          }
        }
      });
    };

    let frame = 0;
    const render = () => {
      states.forEach((state) => {
        if (state.visible) renderSurface(state);
      });
      frame = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const state = states.find((item) => item.element === entry.target);
        if (state) {
          resizeSurface(state);
          if (reducedMotion) renderSurface(state);
        }
      });
    });

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const state = states.find((item) => item.element === entry.target);
          if (state) state.visible = entry.isIntersecting;
        });
      },
      { rootMargin: "120px 0px", threshold: 0 },
    );

    const pointerCleanups: Array<() => void> = [];
    states.forEach((state) => {
      resizeSurface(state);
      resizeObserver.observe(state.element);
      visibilityObserver.observe(state.element);

      if (finePointer && !reducedMotion) {
        const trackPointer = (event: PointerEvent) => {
          const rect = state.element.getBoundingClientRect();
          state.pointer.x = event.clientX - rect.left;
          state.pointer.y = event.clientY - rect.top;
          state.pointer.active = true;
        };
        const clearPointer = () => {
          state.pointer.active = false;
        };

        state.element.addEventListener("pointermove", trackPointer, {
          passive: true,
        });
        state.element.addEventListener("pointerleave", clearPointer);
        pointerCleanups.push(() => {
          state.element.removeEventListener("pointermove", trackPointer);
          state.element.removeEventListener("pointerleave", clearPointer);
        });
      }
    });

    if (reducedMotion) {
      states.forEach(renderSurface);
    } else {
      frame = window.requestAnimationFrame(render);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      pointerCleanups.forEach((cleanup) => cleanup());
      states.forEach((state) => {
        state.canvas.remove();
        state.element.classList.remove("particle-surface-host");
      });
    };
  }, []);

  return null;
}
