"use client";
import AdvanceCourse from "@/components/AdvanceCourse";
import CoreCourse from "@/components/CoreCourse";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainSection />
      <CoreCourse />
      <AdvanceCourse />
      <Footer />
    </>
  );
}
