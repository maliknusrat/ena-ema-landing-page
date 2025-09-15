"use client";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import CarouselOne from "@/components/Carousel";
import CaseStudies from "@/components/CaseStudies";
import LiveLandingPage from "@/components/LiveLandingPage";
import OurPlan from "@/components/OurPlan";
import Questions from "@/components/Questions";
import RealCustomers from "@/components/RealCustomers";
import Testimonials from "@/components/Testimonials";
import TrustUs from "@/components/TrustUs";

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const sections = [
    <Banner key="banner" />,
    <CarouselOne key="carousel" />,
    <TrustUs key="trust" />,
    <CaseStudies key="case" />,
    <OurPlan key="plan" />,
    <LiveLandingPage key="live" />,
    <Testimonials key="testimonials" />,
    <Questions key="questions" />,
    <RealCustomers key="real" />,
  ];

  return (
    <div>
      {sections.map((Section, index) => (
        <motion.div
          key={index}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // animate once when 30% of section is visible
        >
          {Section}
        </motion.div>
      ))}
    </div>
  );
}
