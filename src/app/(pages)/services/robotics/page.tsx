"use client";
import RoboticsAboutService from "@/app/components/molecules/AboutSection/RoboticsAboutSection";
import RoboticsApproachSection from "@/app/components/molecules/ApprochSection/RoboticsApproch";
import RoboticsHeroSection from "@/app/components/molecules/HeroSection/RoboticsHeroSection";
import { RoboticsServiceApplication } from "@/app/components/molecules/ServiceSection/RoboticsServicesApplication";
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection/Robotics";

const Robotics: React.FC = () => {
  return (
    <>
      <RoboticsHeroSection />
      <RoboticsAboutService />
      <WhyChooseUsSection />
      <RoboticsServiceApplication />
      <RoboticsApproachSection />
    </>
  );
};

export default Robotics;
