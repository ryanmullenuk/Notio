"use client";

import { useCallback, useEffect, useState } from "react";

export function SplashIntro() {
  const [visible, setVisible] = useState(true);

  const close = useCallback(() => {
    try {
      window.sessionStorage.setItem("notio-intro-seen", "true");
    } catch {
      // Session storage is optional; the intro can still be dismissed.
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem("notio-intro-seen") === "true";
    } catch {
      seen = false;
    }

    if (reduceMotion || seen) {
      setVisible(false);
      return;
    }

    const fallback = window.setTimeout(close, 9000);
    return () => window.clearTimeout(fallback);
  }, [close]);

  if (!visible) return null;

  return (
    <div className="splash" role="dialog" aria-label="Notio Consulting introduction">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={close}
        className="splash-video"
      >
        <source src="/notio-logo-intro.mp4" type="video/mp4" />
      </video>
      <button className="splash-skip" type="button" onClick={close}>
        Skip intro
      </button>
    </div>
  );
}
