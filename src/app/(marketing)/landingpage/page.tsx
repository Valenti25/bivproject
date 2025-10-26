import React from "react";
import HeroSection from "@/app/components/landing/herosection";
import PopularServices from "@/app/components/landing/popularservices";
import HowToUseSection from "@/app/components/landing/howtousesection";
import QnAsection from "@/app/components/landing/Q&Asection";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PopularServices />
      <HowToUseSection />
      <QnAsection />
      <Footer />
    </div>
  );
}
