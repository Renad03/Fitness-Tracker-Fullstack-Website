import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import fitMan from "../../Assets/images/fitman.png";
import "./styles.css";

const Hero = () => {
  return (
    <section className="heroSection">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6}>
            <div className="heroText">
              <h1>
                Achieve Your <p>FITNESS GOALS</p> 
                With FitMaker
              </h1>
              <p>
                Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?
              </p>
              <div className="heroButtons">
                <Button className="btnPrimary">Start Your Journey</Button>
                <Button className="btnOutline">Explore Programs</Button>
              </div>
            </div>
          </Col>

        
          <Col md={6} className="position-relative">
            <div className="heroImageContainer">
              <img src={fitMan} alt="Fit Man" />
              <div className="statsBox stat1">+80<br /><span>Coaches</span></div>
              <div className="statsBox stat2">+1300<br /><span>Positive Reviews</span></div>
              <div className="statsBox stat3">+1000<br /><span>Workout Videos</span></div>
              <div className="statsBox stat4">+1500<br /><span>Trainers</span></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;