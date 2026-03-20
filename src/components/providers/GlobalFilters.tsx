"use client";

import React from "react";

export const GlobalFilters = () => {
  return (
    <div className="svg-filter-container">
      <svg xmlns="http://www.w3.org/2000/svg">
        {/* High-Fidelity Glass Refraction */}
        <filter id="glass-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4" seed="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        
        {/* Ink Bleed / Rough Edge for Hand-Drawn Elements */}
        <filter id="ink-bleed">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>

        {/* Paper Grain Texture Filter */}
        <filter id="paper-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#F5F5F0" surfaceScale="2">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>
      </svg>
    </div>
  );
};
