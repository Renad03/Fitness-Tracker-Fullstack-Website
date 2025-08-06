import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="container my-5">
            <div className="bg-dark text-white p-5 rounded shadow">
                <h2 className="text-danger mb-4">About Us</h2>
                <p className="lead">
                    Welcome to our fitness website! We are a team of passionate fitness
                    enthusiasts dedicated to helping you achieve your health and fitness
                    goals.
                </p>
                <p>
                    Our platform provides a wide range of resources and tools to help you
                    stay motivated, track your progress, and connect with a community of
                    like-minded individuals.
                </p>
                <p>
                    Whether you're a beginner or an experienced athlete, we have something
                    for everyone.
                </p>
                <p>
                    Thank you for choosing our fitness website. We look forward to helping
                    you on your fitness journey!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
