import React from "react";
import HeroSection from "./_components/herosection";
import PopularServices from "./_components/popularservices";
import HowToUseSection from "./_components/howtousesection";
import QnAsection from "./_components/Q&Asection";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

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
