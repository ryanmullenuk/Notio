"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
};

const particleColours = [
  "rgba(239, 178, 25, 0.82)",
  "rgba(255, 255, 255, 0.58)",
  "rgba(23, 23, 22, 0.32)",
];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const createParticles = () => {
      const count = Math.max(
        24,
        Math.min(72, Math.round((width * height) / 26000)),
      );

      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.34,
        radius: 1 + Math.random() * 0.8,
        colour: particleColours[index % particleColours.length],
      }));
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const drawConnection = (
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
      context.strokeStyle = `rgba(239, 178, 25, ${
        ((range - distance) / range) * 0.2 * strength
      })`;
      context.lineWidth = 0.75;
      context.stroke();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
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

        for (let next = index + 1; next < particles.length; next += 1) {
          const neighbour = particles[next];
          const xDistance = particle.x - neighbour.x;
          const yDistance = particle.y - neighbour.y;
          const distance = Math.hypot(xDistance, yDistance);

          if (distance < 118) {
            drawConnection(
              particle.x,
              particle.y,
              neighbour.x,
              neighbour.y,
              distance,
              118,
            );
          }
        }

        if (pointer.active) {
          const xDistance = particle.x - pointer.x;
          const yDistance = particle.y - pointer.y;
          const distance = Math.hypot(xDistance, yDistance);

          if (distance < 150) {
            drawConnection(
              particle.x,
              particle.y,
              pointer.x,
              pointer.y,
              distance,
              150,
              1.5,
            );
          }
        }
      });

      if (!reducedMotion) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const trackPointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", trackPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", clearPointer);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", trackPointer);
      document.documentElement.removeEventListener("pointerleave", clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />;
}
