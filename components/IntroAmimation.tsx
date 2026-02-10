"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function IntroAmimation() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSVG = async (path: string) => {
      const res = await fetch(path);
      return res.text();
    };

    const runAnimation = async () => {
      const [logoSVG, textSVG] = await Promise.all([
        loadSVG("/LOGO.svg"),
        loadSVG("/LOGOTEXT.svg"),
      ]);

      if (!logoRef.current || !textRef.current) return;

      // Insertar SVGs
      logoRef.current.innerHTML = logoSVG;
      textRef.current.innerHTML = textSVG;

      const logoSvg = logoRef.current.querySelector("svg");
      const textSvg = textRef.current.querySelector("svg");
      if (!logoSvg || !textSvg) return;

      logoSvg.classList.add("w-48");
      textSvg.classList.add("w-64");

      const logoPaths = Array.from(logoSvg.querySelectorAll("path"));
      const textGraphics = Array.from(
        textSvg.querySelectorAll("path, rect, circle, g")
      );
      const textEl = textSvg.querySelector("text");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.8,
            pointerEvents: "none",
          });
        },
      });

      // LOGO aparece
      gsap.set(logoPaths, { opacity: 0, scale: 0.4 });
      tl.to(logoPaths, {
        opacity: 1,
        scale: 1,
        stagger: 0.06,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });

      // LOGO se mueve a la izquierda
      tl.to(logoRef.current, {
        x: -20,
        duration: 0.8,
      });

      // SVG texto + shapes
      gsap.set(textGraphics, { opacity: 0, y: 20 });
      tl.to(textGraphics, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.6,
      });

      // Texto tipo escritura
      if (textEl) {
        const fullText = textEl.textContent || "";
        textEl.textContent = "";

        tl.to({}, {
          duration: 1.1,
          onUpdate() {
            const p = Math.floor(this.progress() * fullText.length);
            textEl.textContent = fullText.slice(0, p) + "▌";
          },
          onComplete() {
            textEl.textContent = fullText;
          },
        });
      }
    };

    runAnimation();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex items-center gap-1">
        <div ref={logoRef} className=""/>
        <div ref={textRef} />
      </div>
    </div>
  );
}
