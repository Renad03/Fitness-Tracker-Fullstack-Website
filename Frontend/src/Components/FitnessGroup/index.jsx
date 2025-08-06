import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { PeopleFill, Calendar2Check, ChatDotsFill, Award } from 'react-bootstrap-icons';
import { CheckCircleFill } from 'react-bootstrap-icons';
import FitnessGroup from '../../Assets/images/fitness-group.png';

const FitnessGroupProgram = () => {
  return (
    <div className="fitness-group-program py-5">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-white p-5 position-relative">
              <h1 className="text-center display-4 mb-3">
                <PeopleFill className="me-2" />
                Fitness Group
              </h1>
              <p className="text-center lead mb-4">Join a community of like-minded individuals on their fitness journey</p>
              <div className="position-relative z-index-1 text-center">
                <Button variant="danger" size="lg" className="px-4">Join a Group Today</Button>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Benefits Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img 
              src={FitnessGroup} 
              alt="Fitness Group" 
              className="img-fluid rounded shadow" 
            />
          </Col>
          <Col className="mt-4 mt-lg-0 text-light" lg={6}>
            <h2 className='text-danger mb-3'>The Power of Community</h2>
            <p className="lead">Our Fitness Groups bring together individuals with similar goals to create a supportive environment for growth and accountability.</p>
            <p>Research shows that people who exercise in groups are more likely to stick with their fitness routines and achieve better results than those who go it alone.</p>
            
            <div className="mt-4">
              <h3 className="h5 mb-3">Benefits of Group Fitness:</h3>
              <ul className="mb-4">
                <li><CheckCircleFill className='text-danger'/> Increased motivation and accountability</li>
                <li><CheckCircleFill className='text-danger'/> Shared knowledge and experience</li>
                <li><CheckCircleFill className='text-danger'/> Social support during challenges</li>
                <li><CheckCircleFill className='text-danger'/> Friendly competition to push your limits</li>
                <li><CheckCircleFill className='text-danger'/> Celebrate achievements together</li>
              </ul>
              <Button variant="danger">Find Your Fitness Tribe</Button>
            </div>
          </Col>
        </Row>
        
        {/* Available Groups Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-danger mb-4">Our Active Fitness Groups</h2>
            <Row>
              {[
                {
                  name: "Weight Loss Warriors",
                  description: "Focused on sustainable weight loss through balanced nutrition and effective workouts",
                  members: 24,
                  meetings: "Mondays & Thursdays @ 6:00 PM",
                  level: "All Levels",
                  icon: <img src="/api/placeholder/50/50" alt="Group Icon" className="rounded-circle" />
                },
                {
                  name: "Strength Builders",
                  description: "Dedicated to building muscle and increasing strength through progressive training",
                  members: 18,
                  meetings: "Tuesdays & Fridays @ 7:00 PM",
                  level: "Intermediate",
                  icon: <img src="/api/placeholder/50/50" alt="Group Icon" className="rounded-circle" />
                },
                {
                  name: "Marathon Prep",
                  description: "Training for upcoming marathon events with structured running programs",
                  members: 15,
                  meetings: "Wednesdays @ 6:00 AM & Saturdays @ 7:00 AM",
                  level: "Intermediate to Advanced",
                  icon: <img src="/api/placeholder/50/50" alt="Group Icon" className="rounded-circle" />
                }
              ].map((group, index) => (
                <Col md={4} className="mb-4"  key={index}>
                  <Card className="h-100 text-light bg-dark shadow-sm">
                    <Card.Header className="bg-dark text-light">
                      <div className="d-flex align-items-center">
                        {group.icon}
                        <div className="ms-3">
                          <h5 className="mb-0">{group.name}</h5>
                          <Badge bg="danger" className="mt-1">{group.level}</Badge>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>{group.description}</Card.Text>
                      <ListGroup variant="flush" className="mb-3">
                        <ListGroup.Item className="d-flex bg-dark text-light">
                          <PeopleFill className="me-2 text-danger" />
                          <span ><strong>{group.members}</strong> active members</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex bg-dark text-light">
                          <Calendar2Check className="me-2 text-danger" />
                          <span>Meets: {group.meetings}</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                    <Card.Footer className="bg-dark text-light text-center">
                      <Button variant="outline-danger">Join Group</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        
        {/* How It Works Section */}
        <Row className="mb-5 bg-dark text-light p-4 rounded shadow-sm">
          <Col>
            <h2 className="text-center mb-4">How Our Fitness Groups Work</h2>
            <Row className="text-center">
              {[
                {
                  icon: <PeopleFill size={40} className="text-danger mb-3" />,
                  title: "Join a Group",
                  description: "Browse our available groups and find one that matches your goals and schedule"
                },
                {
                  icon: <Calendar2Check size={40} className="text-danger mb-3" />,
                  title: "Attend Sessions",
                  description: "Meet regularly with your group for workouts, discussions, and accountability check-ins"
                },
                {
                  icon: <ChatDotsFill size={40} className="text-danger mb-3" />,
                  title: "Stay Connected",
                  description: "Use our app to communicate with group members between sessions"
                },
                {
                  icon: <Award size={40} className="text-danger mb-3" />,
                  title: "Achieve Together",
                  description: "Celebrate milestones and support each other through challenges"
                }
              ].map((step, index) => (
                <Col md={3} className="mb-4 mb-md-0" key={index}>
                  <Card className="h-100 border-0 shadow-sm bg-dark text-light">
                    <Card.Body>
                      {step.icon}
                      <h3 className="h5">{step.title}</h3>
                      <Card.Text>{step.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        
        {/* CTA Section */}
        <Row className="bg-danger text-white p-5 rounded shadow text-center">
          <Col>
            <h2 className="mb-4">Ready to Achieve More Together?</h2>
            <p className="lead mb-4">Join a fitness group today and experience the power of community support</p>
            <Button variant="light" size="lg" className="px-5">
              <span className="text-danger fw-bold">Browse All Groups</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FitnessGroupProgram;