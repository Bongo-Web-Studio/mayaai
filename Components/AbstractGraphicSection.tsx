import React from "react";

export default function AbstractGraphicSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
        {/* main textured gradient */}
        <div className="absolute inset-0 gradient-texture pointer-events-none" />

        {/* subtle corner flares / highlights */}
        <div className="absolute inset-0 corner-flares pointer-events-none" />

        {/* example content on top of the gradient */}
        <div className="relative z-30 p-8 text-white">
          <h2 className="text-3xl font-semibold">Abstract Graphic</h2>
          <p className="mt-2 max-w-xl">
            Simulated blended gradient with visible texture and corner accent flares.
          </p>
        </div>
      </div>

      <style>{`
/* -------- base gradient layers -------- */
.gradient-texture {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(600px circle at 8% 12%, rgba(255,200,80,0.55), transparent 30%),
    radial-gradient(520px circle at 92% 82%, rgba(80,140,255,0.45), transparent 28%),
    linear-gradient(90deg, rgba(249,115,22,1) 0%, rgba(239,68,68,1) 50%, rgba(59,130,246,1) 100%);
  background-blend-mode: screen, screen, normal;
  filter: saturate(118%) contrast(106%);
  z-index: 10;
  will-change: background;
}

/* -------- corner flares -------- */
.corner-flares {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(320px circle at 0% 0%, rgba(255,220,150,0.32), transparent 38%),
    radial-gradient(240px circle at 100% 100%, rgba(120,160,255,0.20), transparent 36%),
    radial-gradient(220px circle at 0% 100%, rgba(255,120,140,0.14), transparent 45%),
    radial-gradient(180px circle at 100% 0%, rgba(80,220,200,0.09), transparent 45%);
  mix-blend-mode: soft-light;
  z-index: 15;
  pointer-events: none;
  opacity: 0.95;
}

/* -------- texture layers: soft-clouds (before) + fine-grain (after) -------- */
/* large soft cloud turbulence for organic depth */
.gradient-texture::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* low-frequency turbulence = big soft cloud shapes */
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>\
      <filter id='f'><feTurbulence baseFrequency='0.02' numOctaves='3' seed='5'/><feColorMatrix type='saturate' values='0'/></filter>\
      <rect width='100%' height='100%' filter='url(#f)' opacity='0.6'/>\
    </svg>");
  background-size: 800px 800px;
  mix-blend-mode: overlay;
  opacity: 0.38; /* increase to make clouds more visible */
  z-index: 18;
  transform: scale(1.02);
  filter: contrast(115%) blur(0.4px);
}

/* fine grain — higher frequency, visible film-like noise */
.gradient-texture::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* high-frequency turbulence = fine grain */
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'>\
      <filter id='g'><feTurbulence baseFrequency='0.9' numOctaves='1' seed='42' stitchTiles='stitch'/></filter>\
      <rect width='100%' height='100%' filter='url(#g)' opacity='0.14'/>\
    </svg>");
  background-size: 300px 300px;
  mix-blend-mode: multiply;
  opacity: 0.18; /* visible grain — tune down to 0.08 for subtler effect */
  z-index: 20;
  pointer-events: none;
}

/* small diagonal subtle halftone for extra character (optional) */
.gradient-texture .halftone {
  display: none;
}

/* transitions */
.gradient-texture,
.corner-flares {
  transition: opacity 250ms ease, transform 350ms ease;
}

/* ensure children like text are above textures */
.relative > *:not(.gradient-texture):not(.corner-flares) {
  position: relative;
  z-index: 30;
}

/* -------- tweak helpers (responsive) -------- */
/* On small screens reduce cloud intensity so text remains readable */
@media (max-width: 640px) {
  .gradient-texture::before { opacity: 0.26; background-size: 600px 600px; }
  .gradient-texture::after  { opacity: 0.12; background-size: 200px 200px; }
}

/* Utility classes (if you want quick runtime tuning) */
/* add class .texture-strong to parent wrapper to intensify the texture */
.texture-strong .gradient-texture::before { opacity: 0.52; }
.texture-strong .gradient-texture::after  { opacity: 0.26; }
      `}</style>
    </div>
  );
}
