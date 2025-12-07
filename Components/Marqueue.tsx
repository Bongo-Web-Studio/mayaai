"use client"
import React, { useEffect, useRef, useState } from "react";
import { IoInformationCircle } from "react-icons/io5";

interface MarqueueProps {
  items?: string[];
}

export default function Marqueue({
  items = [
    "/Logo/figma.png",
    "/Logo/google.png",
    "/Logo/meta.png",
    "/Logo/Microsoft.png",
    "/Logo/notion.png",
    "/Logo/Nvidia.png",
    "/Logo/Perplexity.png",
    "/Logo/tcs.png",
  ],
}: MarqueueProps): React.ReactElement {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevActiveRef = useRef<HTMLElement | null>(null);

  // manage Escape, outside clicks/taps & focus
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsInfoOpen(false);
      // optionally trap focus (simple)
      if (isInfoOpen && e.key === "Tab" && cardRef.current) {
        // Basic tab trap: keep focus inside the dialog
        const focusable = cardRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    function onPointer(e: Event) {
      if (!isInfoOpen || !cardRef.current) return;
      // click or touch outside the card closes it
      const target = e.target;
      if (target instanceof Node && !cardRef.current.contains(target)) {
        setIsInfoOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [isInfoOpen]);

  // manage focus when opening/closing modal
  useEffect(() => {
    if (isInfoOpen) {
      prevActiveRef.current = document.activeElement as HTMLElement | null;
      // focus the close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      // prevent body scroll while modal open
      document.body.style.overflow = "hidden";
    } else {
      // restore focus
      prevActiveRef.current?.focus?.();
      document.body.style.overflow = "";
    }
    // cleanup handled by effect above / on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInfoOpen]);

  return (
    <section className="w-full mx-auto px-4 py-8 bg-[#F4EEE4] flex justify-center items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-2xl font-semibold text-[#25170D] mb-6 flex flex-wrap items-center gap-2">
          <span>Trusted by top Companies</span>
          <span className="text-[#57534D]">HR / Recruiter</span>
        </h1>

        <div className="bg-gray-200 rounded-lg p-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 mb-1">
            {items.slice(0, 4).map((item, idx) => (
              <div
                key={`top-${idx}`}
                className="flex items-center justify-center bg-white/90 rounded-md p-3 h-20 md:h-24 lg:h-28"
              >
                <img
                  src={item}
                  alt={`logo-${idx}`}
                  loading="lazy"
                  className="w-40 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
            {items.slice(4).map((item, idx) => (
              <div
                key={`bottom-${idx}`}
                className="flex items-center justify-center bg-white/90 rounded-md p-3 h-20 md:h-24 lg:h-28"
              >
                <img
                  src={item}
                  alt={`logo-bottom-${idx}`}
                  loading="lazy"
                  className="w-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
