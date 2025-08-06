import React from "react";
import ServiceCard from "../ServiceCard";
import styles from "./ourServices.module.css"
import Heading from "../Heading/Heading";
import service1 from "../../Assets/images/service-1.jpg" 
import service2 from "../../Assets/images/service-2.jpg"
import service3 from "../../Assets/images/service-3.jpg"
import service4 from "../../Assets/images/service-4.jpg"



const services = [
  {
    title: "LOSING WEIGHT",
    description: "Click to See the Losing Weight Plans.",
    image: service1,
    link: "#"
  },
  {
    title: "BUILDING MUSCLE",
    description: "Click to See the Muscle Building Plans.",
    image: service2,
    link: "#"
  },
  {
    title: "TRAINING IN HOME",
    description: "Click to See Home Training Programs.",
    image:  service3,
    link: "#"
  },
  {
    title: "GYM PLAN",
    description: "Click to See Full Gym Workout Plans.",
    image: service4,
    link: "#"
  }
];

const OurServices = () => {
    return (
        <div className={`${styles["service-container"]} container py-2 text-center text-white mx-auto`}>
            <Heading 
            headOne="Our" 
            headTwo="Services" 
            headingParagraph="At This Part You Can Easily access all of our services. take a look at them and chose witch ever you want."
            />
            <div className={`${styles["our-services"]} row`}>
                {services.map((service, index) => (
                    <div className={`col-12 col-sm-6 col-md-3 my-2`} key={index}>
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
