"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function getChromeElements() {
  return Array.from(
    document.querySelectorAll("[data-layout-chrome]")
  ) as HTMLElement[];
}

export default function ResumeShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const chromeEls = getChromeElements();
    chromeEls.forEach((el) => {
      el.style.transition = "none";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
    });

    // Slide the card in from below with a slight rotation (like paper sliding onto a desk)
    const card = cardRef.current;
    if (card) {
      card.style.transform = "translateY(120%) rotate(8deg) scale(0.95)";
      card.style.opacity = "0";
      card.offsetHeight; // reflow
      card.style.transition =
        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease";
      card.style.transform = "translateY(0) rotate(0deg) scale(1)";
      card.style.opacity = "1";
    }

    // Fade in the back button after the card lands
    const btn = buttonRef.current;
    if (btn) {
      btn.style.opacity = "0";
      btn.style.transform = "translateY(12px)";
      setTimeout(() => {
        btn.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        btn.style.opacity = "1";
        btn.style.transform = "translateY(0)";
      }, 500);
    }

    return () => {
      chromeEls.forEach((el) => {
        el.style.transition = "opacity 0.3s ease";
        el.style.opacity = "1";
        el.style.pointerEvents = "";
      });
    };
  }, []);

  const goBack = () => {
    if (leaving) return;
    setLeaving(true);

    // Slide the card off the top (like sweeping paper off a desk)
    const card = cardRef.current;
    if (card) {
      card.style.transition =
        "transform 0.5s cubic-bezier(0.55, 0, 1, 0.45), opacity 0.3s ease 0.15s";
      card.style.transform = "translateY(-120%) rotate(-6deg) scale(0.95)";
      card.style.opacity = "0";
    }

    const btn = buttonRef.current;
    if (btn) {
      btn.style.transition = "opacity 0.2s ease";
      btn.style.opacity = "0";
    }

    setTimeout(() => {
      getChromeElements().forEach((el) => {
        el.style.transition = "opacity 0.3s ease";
        el.style.opacity = "1";
        el.style.pointerEvents = "";
      });
      router.back();
    }, 450);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div ref={cardRef} className="w-full max-w-2xl">
          {children}
        </div>

        <button
          ref={buttonRef}
          onClick={goBack}
          className="mt-10 mb-6 px-8 py-3 text-xs font-mono bg-accent text-background hover:opacity-80 transition-opacity cursor-pointer"
        >
          &larr; go back
        </button>
      </div>
    </div>
  );
}
