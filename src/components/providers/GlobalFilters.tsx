"use client";

import React from "react";

export const GlobalFilters = () => {
  return (
    <div className="svg-filter-container">
      <svg xmlns="http://www.w3.org/2000/svg">
        {/* Paper Grain Texture Filter */}
        <filter id="paper-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#F5F5F0" surfaceScale="2">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>

        {/* Rough Edge Filter for Hand Drawn Effects */}
        <filter id="rough-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>
    </div>
  );
};
