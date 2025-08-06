import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { HouseFill, People, Clock, Star } from 'react-bootstrap-icons';
import HomeWorkout from '../../Assets/images/home-workout.png';

const HomeWorkoutProgram = () => {
  return (
    <div className="home-workout-program py-5">
      <Container>
        {/* Hero Section with Better Contrast */}
        <Row className="mb-5">
          <Col className="text-center">
            <div className="text-white p-5 position-relative">
              <h1 className="display-4 mb-3">
                <HouseFill className="me-2" />
                Home Workout Program
              </h1>
              <p className="lead mb-4">Achieve amazing results without leaving your home</p>
            </div>
          </Col>
        </Row>
        
        <div>
          <h3 className="text-danger">No Gym? No Problem!</h3>
          <h4 className="mb-2 text-light">Everything you need for an effective workout in the comfort of your own home</h4>
        </div>


        {/* What You'll Need Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img 
              src={HomeWorkout} 
              alt="Home Workout" 
            />
          </Col>
          <Col lg={6}>
            <h3 className='text-white'>What You'll Need:</h3>
            <div className="d-flex flex-wrap mb-4">
              {[
                'Resistance Bands', 
                'Yoga Mat', 
                'Dumbbells (optional)', 
                'Chair', 
                'Water Bottle'
              ].map((item, index) => (
                <Badge 
                  bg="dark" 
                  text="light" 
                  className="me-2 mb-2 p-2 border" 
                  key={index}
                >
                  {item}
                </Badge>
              ))}
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-4 text-center">
                <div className="bg-danger rounded-circle p-3 d-inline-block mb-2">
                  <Clock color="white" size={24} />
                </div>
                <p className="mb-0 text-light"><strong>30-45 min</strong><br />per session</p>
              </div>
              
              <div className="me-4 text-center">
                <div className="bg-danger rounded-circle p-3 d-inline-block mb-2">
                  <People color="white" size={24} />
                </div>
                <p className="mb-0 text-light"><strong>All Levels</strong><br />welcome</p>
              </div>
              
              <div className="text-center">
                <div className="bg-danger rounded-circle p-3 d-inline-block mb-2">
                  <Star color="white" size={24} />
                </div>
                <p className="mb-0 text-light"><strong>Results</strong><br />guaranteed</p>
              </div>
            </div>
            
            <Button variant="danger" size="lg" className="mt-3">Start Your Home Fitness Journey</Button>
          </Col>
        </Row>
        
        {/* Weekly Workout Structure Section with Improved Visibility */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4 text-danger">Weekly Workout Structure</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          {/* Monday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Monday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Full Body HIIT</h6>
                <Card.Text>
                  High-intensity interval training to boost metabolism and burn calories.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: 30 min</small>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* Tuesday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Tuesday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Upper Body Strength</h6>
                <Card.Text>
                  Focus on chest, back, shoulders, and arms using bodyweight exercises.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: 35 min</small>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* Wednesday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Wednesday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Core & Flexibility</h6>
                <Card.Text>
                  Build a strong core and improve overall flexibility with yoga-inspired movements.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: 30 min</small>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* Thursday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Thursday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Lower Body Power</h6>
                <Card.Text>
                  Target legs, glutes, and calves with effective bodyweight exercises.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: 35 min</small>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* Friday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Friday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Cardio & Abs</h6>
                <Card.Text>
                  Cardiovascular training combined with intensive ab workout.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: 30 min</small>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* Saturday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Saturday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Active Recovery</h6>
                <Card.Text>
                  Light stretching and mobility work to aid recovery.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: 20 min</small>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* Sunday */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h5 className="mb-0">Sunday</h5>
              </Card.Header>
              <Card.Body>
                <h6 className="text-danger">Rest Day</h6>
                <Card.Text>
                  Give your body time to recover and rebuild.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light">
                <small className="text-muted">Duration: Rest</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        
        {/* Testimonials Section with Better Contrast */}
        <Row className="bg-dark text-white p-4 rounded shadow-sm mb-5">
          <Col>
            <h3 className="text-center mb-4">What Our Home Workout Members Say</h3>
            <Row>
              {/* Testimonial 1 */}
              <Col md={4} className="mb-3 mb-md-0">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star className="text-warning" key={i} />
                      ))}
                    </div>
                    <Card.Text>"I've been following the home workout program for 3 months and have seen amazing results. The workouts are challenging but doable, and I love the flexibility of working out at home."</Card.Text>
                    <div className="text-end">
                      <strong>- Sarah L.</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              {/* Testimonial 2 */}
              <Col md={4} className="mb-3 mb-md-0">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star className="text-warning" key={i} />
                      ))}
                    </div>
                    <Card.Text>"As a busy professional, the home workout program has been a game-changer. I've lost 15 pounds and gained significant muscle tone without ever setting foot in a gym."</Card.Text>
                    <div className="text-end">
                      <strong>- James T.</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              {/* Testimonial 3 */}
              <Col md={4} className="mb-3 mb-md-0">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="mb-2">
                      {[...Array(4)].map((_, i) => (
                        <Star className="text-warning" key={i} />
                      ))}
                    </div>
                    <Card.Text>"I was skeptical about home workouts being effective, but this program proved me wrong. The variety keeps me engaged, and the results speak for themselves!"</Card.Text>
                    <div className="text-end">
                      <strong>- Mia K.</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        
        {/* CTA Section with High Visibility */}
        <Row className="bg-danger text-white p-5 rounded shadow text-center">
          <Col>
            <h2 className="mb-4">Ready to Transform Your Body at Home?</h2>
            <p className="lead mb-4">Join thousands of successful members who have achieved their fitness goals from the comfort of home</p>
            <Button variant="light" size="lg" className="px-5">
              <span className="text-danger fw-bold">Join Now</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeWorkoutProgram;