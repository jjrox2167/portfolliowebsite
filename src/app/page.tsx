import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";

import React from "react";

export default function Home() {
  return (
    <div>
      <main>
        {/* Intro Hero Section */}
        <HeroSection />
        {/* */}
        <AboutSection />
        <WorkExperience />

      </main>
    </div>

  );
}
