import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import WeightLoss from '../../Assets/images/weight-loss.png';

const WeightLossProgram = () => {
  return (
    <div className="weight-loss-program py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center display-4 mb-3 text-white">Weight Loss Program</h1>
            <p className="text-center lead text-secondary">Achieve your weight loss goals with our scientifically proven program</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6}>
            <div className="mb-4">
              <h2 className="text-red">Transform Your Body</h2>
              <p className="text-light">
                Our Weight Loss Program is designed to help you shed unwanted pounds while maintaining muscle mass.
                We combine proper nutrition with tailored exercise routines to ensure sustainable results.
              </p>
              <p className="text-light">
                Whether you're looking to lose a few pounds or make a significant transformation,
                our expert coaches will guide you every step of the way.
              </p>
            </div>

            <div>
              <h3 className="text-red">Program Benefits</h3>
              <ul className="list-unstyled">
                {[
                  'Personalized meal plans',
                  'Custom workout routines',
                  'Weekly progress tracking',
                  'Support from certified coaches',
                  'Access to our mobile app',
                  'Nutritional guidance'
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
                src={WeightLoss}
                alt="Weight Loss Program" 
                className="img-fluid shadow-sm rounded mb-4 w-100" 
              />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className="mb-4 text-red">Program Structure</h2>
          </Col>
        </Row>

        <Row>
          {[
            {
              title: 'Phase 1: Assessment',
              description: 'Comprehensive body assessment and goal setting to create your personalized plan.',
              duration: '1 Week'
            },
            {
              title: 'Phase 2: Foundation',
              description: 'Build healthy habits with nutrition basics and foundational workout routines.',
              duration: '3 Weeks'
            },
            {
              title: 'Phase 3: Acceleration',
              description: 'Increase workout intensity and refine nutrition for optimal fat loss.',
              duration: '4 Weeks'
            },
            {
              title: 'Phase 4: Maintenance',
              description: 'Learn to maintain your results and continue progress with sustainable practices.',
              duration: '4 Weeks'
            }
          ].map((phase, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 mb-4 bg-dark rounded shadow">
                <Card.Body>
                  <Card.Title className="text-danger">{phase.title}</Card.Title>
                  <Card.Text className="text-white">{phase.description}</Card.Text>
                  <div className="mt-3 text-light bold">Duration: {phase.duration}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <h2 className="mb-4 text-white">Ready to Start Your Weight Loss Journey?</h2>
            <Button variant="danger" size="lg" className="px-5 me-3">Sign Up Now</Button>
            <Button variant="outline-danger" size="lg" className="px-5">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WeightLossProgram;
