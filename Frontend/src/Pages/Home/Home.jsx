import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";
import Testimonial from "../../Components/Testimonial/testimonial";
import FitnessToolsSection from "../../Components/BlogPost1/FitnessToolsSection";
import Hero from "../../Components/HeroSection/Hero";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
      <FitnessToolsSection />
      <Testimonial/>
      </div>
  );
};

export default Home;
