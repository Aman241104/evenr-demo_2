"use client";

import React from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/atoms/CustomCursor";
import { SpatialNarrative } from "@/components/atoms/SpatialNarrative";
import { Preloader } from "@/components/molecules/Preloader";
import { ScrollProgress } from "@/components/atoms/ScrollProgress";
import { AnalogArtifacts, useArtifactMotion } from "@/components/atoms/AnalogArtifacts";
import { GlobalFilters } from "@/components/providers/GlobalFilters";

const ArtifactWrapper = ({ children }: { children: React.ReactNode }) => {
  useArtifactMotion();
  return <>{children}</>;
};

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Preloader>
      <SmoothScrollProvider>
        <ArtifactWrapper>
          <GlobalFilters />
          <AnalogArtifacts />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <SpatialNarrative />
          {children}
        </ArtifactWrapper>
      </SmoothScrollProvider>
    </Preloader>
  );
};
