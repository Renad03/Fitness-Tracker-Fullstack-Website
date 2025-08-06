import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { PersonCheck, Calendar, ChatDots, ListCheck } from 'react-bootstrap-icons';
import OneOnOneCoachingImage from '../../Assets/images/1on1Coaching.png';

const OneOnOneCoaching = () => {
  return (
    <div className="one-on-one-coaching py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center text-light display-4 mb-3">
              1-on-1 Personal Coaching
            </h1>
            <p className="text-center text-light lead">Personalized attention and guidance for maximum results</p>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="position-relative">
              <img 
                src={OneOnOneCoachingImage} 
                alt="Personal Training" 
                className="img-fluid rounded shadow-sm" 
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2 className='text-danger'>Your Journey, Our Expertise</h2>
            <p className="lead text-light">Our 1-on-1 coaching program provides the highest level of personalized attention to help you reach your fitness goals efficiently and effectively.</p>
            <p className='text-light'>Working directly with a dedicated coach means your program is fully customized to your specific needs, limitations, and goals. Your coach will adjust your training and nutrition in real-time based on your progress and feedback.</p>
            
            <div className="d-flex flex-wrap mt-4">
              {[
                {
                  icon: <PersonCheck className="me-2" />,
                  text: 'Dedicated Personal Coach'
                },
                {
                  icon: <Calendar className="me-2" />,
                  text: 'Flexible Scheduling'
                },
                {
                  icon: <ChatDots className="me-2" />,
                  text: '24/7 Support'
                },
                {
                  icon: <ListCheck className="me-2" />,
                  text: 'Customized Workout Plans'
                }
              ].map((feature, index) => (
                <div className="me-4 mb-3" key={index}>
                  <div className="d-flex align-items-center text-danger">
                    {feature.icon}
                    <span className="fw-bold">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Button variant="danger" size="lg" className="me-2">Book a Consultation</Button>
              <Button variant="outline-dark">Learn More</Button>
            </div>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col>
            <h2 className="text-center  text-light mb-4">How 1-on-1 Coaching Works</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          {[
            {
              number: '01',
              title: 'Initial Assessment',
              description: 'We start with a comprehensive assessment of your current fitness level, goals, and any limitations or injuries.'
            },
            {
              number: '02',
              title: 'Custom Program Creation',
              description: 'Your coach develops a personalized workout and nutrition plan tailored specifically to your needs and objectives.'
            },
            {
              number: '03',
              title: 'Regular Training Sessions',
              description: 'Meet with your coach for regular in-person sessions to ensure proper form, technique, and continuous progress.'
            },
            {
              number: '04',
              title: 'Ongoing Support & Adjustments',
              description: 'Receive continuous support, progress tracking, and program adjustments to optimize your results.'
            }
          ].map((step, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <Card className="h-100 rounded bg-dark text-light shadow-sm border-0">
                <Card.Body>
                  <div className="display-4 text-danger mb-2">{step.number}</div>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="bg-dark text-white p-4 rounded">
          <Col md={8}>
            <h3>Experience the Difference of Personalized Coaching</h3>
            <p className="mb-md-0">Take the first step toward achieving your fitness goals with expert guidance.</p>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
            <Button variant="danger" size="lg">Schedule Your First Session</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OneOnOneCoaching;