import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { Diagram3Fill, Calendar3Week, Award, Speedometer } from 'react-bootstrap-icons';
import GymTraining from '../../Assets/images/gym-training.png';

const GymPlanProgram = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planTitle) => {
    console.log("Selected plan:", planTitle);
    navigate('/booking');
  };

  const handleGenericNavigate = () => {
    console.log("Navigating to booking");
    navigate('/booking');
  };

  return (
    <div className="gym-plan-program py-5">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-white p-5 rounded position-relative">
              <h1 className="text-center display-4 mb-3">
                <Diagram3Fill className="me-2" />
                Gym Plan
              </h1>
              <p className="text-center text-light lead mb-4">
                Strategic programming to maximize your gym results
              </p>
              <div className="position-relative z-index-1 text-center">
                <Button 
                  variant="danger" 
                  size="lg" 
                  className="px-4"
                  onClick={handleGenericNavigate}
                >
                  Get Your Personalized Plan
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Overview Section */}
        <Row className="mb-5 align-items-center text-light">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2>Structured Approach to Fitness</h2>
            <p className="lead">
              Our Gym Plan is designed to help you make the most of your gym membership with
              strategic workouts organized for optimal results.
            </p>
            <p>
              Whether you're new to the gym environment or a seasoned lifter looking for a fresh
              approach, our Gym Plan provides the structure and progression needed to achieve your
              fitness goals efficiently.
            </p>

            <div className="d-flex flex-wrap mt-4">
              {[
                {
                  icon: <Calendar3Week size={24} className="me-2 text-danger" />,
                  text: 'Progressive 12-week cycles',
                },
                {
                  icon: <Speedometer size={24} className="me-2 text-danger" />,
                  text: 'Intensity-based programming',
                },
                {
                  icon: <Award size={24} className="me-2 text-danger" />,
                  text: 'Goal-specific adaptations',
                },
              ].map((feature, index) => (
                <div className="me-4 mb-3" key={index}>
                  <div className="d-flex align-items-center">
                    {feature.icon}
                    <span className="fw-bold">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <img src={GymTraining} alt="Gym Training" className="img-fluid rounded shadow" />
          </Col>
        </Row>

        {/* Plan Options Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-danger mb-4">Choose Your Gym Plan</h2>
            <Row>
              {[
                {
                  title: 'Beginner',
                  description:
                    'Perfect for those new to the gym environment focusing on form and building confidence',
                  features: [
                    'Full gym orientation',
                    'Form-focused exercises',
                    'Progressive loading introduction',
                    'Machine to free weight transition',
                  ],
                  price: '$49',
                  color: 'success',
                },
                {
                  title: 'Intermediate',
                  description:
                    'For those familiar with gym basics ready to increase intensity and challenge',
                  features: [
                    'Periodized training cycles',
                    'Split routine introduction',
                    'Advanced exercise variations',
                    'Nutrition guidelines',
                  ],
                  price: '$79',
                  color: 'warning',
                  featured: true,
                },
                {
                  title: 'Advanced',
                  description:
                    'Designed for experienced lifters seeking to break plateaus and maximize results',
                  features: [
                    'Complex programming methods',
                    'Specialized training techniques',
                    'Performance optimization',
                    'Recovery protocols',
                  ],
                  price: '$99',
                  color: 'danger',
                },
              ].map((plan, index) => (
                <Col md={4} className="mb-4" key={index}>
                  <Card className={`h-100 shadow ${plan.featured ? 'border-danger' : ''}`}>
                    {plan.featured && (
                      <div className="bg-danger text-white py-1 text-center">
                        <small className="fw-bold">MOST POPULAR</small>
                      </div>
                    )}
                    <Card.Body className="text-center bg-dark text-light">
                      <Card.Title className={`text-${plan.color} h3 mb-3`}>{plan.title}</Card.Title>
                      <div className="mb-3">
                        <span className="display-4">{plan.price}</span>
                        <span className="text-muted">/month</span>
                      </div>
                      <Card.Text className="mb-4">{plan.description}</Card.Text>
                      <hr />
                      <ul className="list-unstyled text-start mb-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={plan.featured ? 'danger' : 'outline-dark'}
                        className="w-100"
                        onClick={() => handleSelectPlan(plan.title)}
                      >
                        Select Plan
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Sample Workout Schedule */}
        <Row className="mb-5 bg-dark text-light p-4 rounded shadow-sm">
          <Col>
            <h2 className="text-center mb-4">Sample Weekly Gym Schedule</h2>
            <Table responsive bordered hover className="shadow-sm table-dark">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Focus</th>
                  <th>Key Exercises</th>
                  <th>Intensity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">Monday</td>
                  <td>Push Day (Chest, Shoulders, Triceps)</td>
                  <td>Bench Press, Shoulder Press, Tricep Extensions</td>
                  <td>
                    <Badge bg="danger">High</Badge>
                  </td>
                </tr>
                {/* Add additional rows as needed */}
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="bg-dark text-white p-5 rounded shadow text-center">
          <Col>
            <h2 className="mb-4">Ready to Maximize Your Gym Results?</h2>
            <p className="lead mb-4">
              Get a professionally designed plan tailored to your goals and experience level
            </p>
            <Button
              variant="danger"
              size="lg"
              className="px-5"
              onClick={handleGenericNavigate}
            >
              Start Your Gym Plan Today
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GymPlanProgram;
