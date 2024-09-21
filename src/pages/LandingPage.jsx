import React from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import HowTo from "../components/LandingPage/HowTo";
import OurServies from "../components/LandingPage/OurServices";
import CTA from "../components/LandingPage/CTA";

function LandingPage() {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <HowTo />
      <OurServies />
      <CTA />
    </div>
  );
}

export default LandingPage;
