import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "./AccordionItem";
import './Accordion.css'

const accordionContent = [
  {
    title: "What is FitMaker and how can it help me reach my fitness goals?",
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    title: "How do I get started with a workout plan on FitMaker?",
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    title: "What is included in the Custom Plan?",
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    title: "Can I change my plan after signing up?",
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    title: "What kind of support can I expect from my trainer?",
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
];

export default function AccordionSection() {
  const [activeKey, setActiveKey] = useState();

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="bg-main py-5">
      <div className="container">
        <h2 className="text-white fw-bold text-center mb-4">FAQ</h2>
        <Accordion activeKey={activeKey} onSelect={handleToggle}>
          <div className="accordion-border"></div>
          {accordionContent.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                selected={activeKey === index}
              />
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
