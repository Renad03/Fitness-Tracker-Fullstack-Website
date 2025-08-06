import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { ArrowRight, Stopwatch, Award, BarChart } from 'react-bootstrap-icons';
import { CheckCircleFill } from 'react-bootstrap-icons';
import BuildingMuscles from '../../Assets/images/building-muscles.png';

const BuildingMusclesProgram = () => {
  return (
    <div className="building-muscles-program py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center display-4 mb-3 text-light">Building Muscles Program</h1>
            <p className="text-center lead text-light">Unlock your strength potential with our comprehensive muscle building system</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
          <div>
            <h3 className="text-red">Why Choose Our Program?</h3>
            <ul className="list-unstyled">
              {[
                'Science-based training protocols',
                'Progressive overload techniques',
                'Personalized nutrition plans',
                'Recovery optimization',
                'Supplement guidance'
              ].map((benefit, index) => (
                <li key={index} className="mb-2 text-light">
                  <CheckCircleFill className="text-danger me-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          </Col>
          <Col lg={6}>
              <img 
                src={BuildingMuscles}
                alt="Weight Loss Program" 
                className="img-fluid shadow-sm rounded mb-4 w-100" 
              />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4 text-light">The Muscle Building Process</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          {[
            {
              icon: <Stopwatch size={40} className="text-danger mb-3" />,
              title: 'Strategic Workout Design',
              description: 'Carefully crafted workout routines that target all major muscle groups with optimal volume and intensity.'
            },
            {
              icon: <BarChart size={40} className="text-danger mb-3" />,
              title: 'Progressive Overload',
              description: 'Systematic approach to gradually increasing weight, reps, or sets to continuously challenge your muscles.'
            },
            {
              icon: <Award size={40} className="text-danger mb-3" />,
              title: 'Nutritional Excellence',
              description: 'Detailed nutrition plans to ensure you get the right macros and calories to support muscle growth.'
            }
          ].map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm bg-dark rounded text-white">
                <Card.Body>
                  {item.icon}
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="bg-dark p-4 rounded text-white">
          <Col md={8}>
            <h3>Ready to Build the Physique You've Always Wanted?</h3>
            <p className="mb-0">Join our Building Muscles Program today and start seeing results within the first month!</p>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
            <Button variant="danger" size="lg">Enroll Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuildingMusclesProgram;