import React from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import "./styles.css";
import NutritionCoachingImage from "../../Assets/images/nutrition-coaching.png";

const NutritionCoaching = () => {
  return (
    <>      
      {/* Hero Section */}
      <div className="nutrition-hero text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold">Nutrition Coaching</h1>
              <p className="lead">Transform your body with personalized nutrition plans designed by expert coaches.</p>
              <Button variant="danger" size="lg" className="mt-3">Get Started Today</Button>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <div>
                <img
                  src={NutritionCoachingImage}
                  alt="Nutrition Coaching"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Benefits Section */}
      <Container className="py-5">
        <h2 className="text-center text-light fw-bold mb-5">Why Choose Our Nutrition Coaching?</h2>
        <Row>
          {[
            {
              title: "Personalized Plans",
              description: "Customized nutrition plans tailored to your specific goals and dietary needs."
            },
            {
              title: "Expert Coaches",
              description: "Work with certified nutritionists who understand the science of food and fitness."
            },
            {
              title: "Ongoing Support",
              description: "Regular check-ins and adjustments to keep you on track and accountable."
            }
          ].map((benefit, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 nutrition-card border-0 bg-dark text-light shadow-sm">
                <div className="benefit-icon-container bg-danger mx-auto mt-4"></div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Coaching Plans */}
      <div className="text-white py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Nutrition Coaching Plans</h2>
          <Row>
            {[
              {
                title: "Basic Plan",
                price: "$99",
                features: [
                  "Initial nutrition assessment",
                  "Customized meal plan",
                  "Monthly check-in",
                  "Recipe suggestions"
                ]
              },
              {
                title: "Premium Plan",
                price: "$199",
                features: [
                  "Everything in Basic Plan",
                  "Weekly check-ins",
                  "Macronutrient tracking",
                  "Supplement recommendations",
                  "24/7 coach messaging"
                ],
                highlighted: true
              },
              {
                title: "Ultimate Plan",
                price: "$299",
                features: [
                  "Everything in Premium Plan",
                  "Daily food journal review",
                  "Grocery shopping assistance",
                  "Pantry clean-out guidance",
                  "Nutrition workshops"
                ]
              }
            ].map((plan, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card className={`h-100 border-0 shadow ${plan.highlighted ? 'bg-danger text-white' : 'bg-dark text-light'}`}>
                  <Card.Header className="text-center border-0 py-3">
                    <h3 className="fw-bold m-0">{plan.title}</h3>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <h4 className="display-5 fw-bold mb-4">{plan.price}<span className="fs-6">/month</span></h4>
                    <ListGroup variant="flush" className="border-0">
                      {plan.features.map((feature, i) => (
                        <ListGroup.Item key={i} className={`border-0 ${plan.highlighted ? 'bg-danger text-white' : 'bg-dark text-light'}`}>
                          {feature}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                  <Card.Footer className="text-center border-0 pb-4">
                    <Button variant={plan.highlighted ? "light" : "danger"} size="lg">
                      Choose Plan
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimonials */}
      <Container className="py-5">
        <h2 className="text-center text-light fw-bold mb-5">Success Stories</h2>
        <Row>
          {[1, 2, 3].map((testimonial, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm p-3 bg-dark text-light">
                <div className="testimonial-image bg-danger rounded-circle mx-auto mb-3"></div>
                <Card.Body className="text-center">
                  <div className="mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-danger">★</span>
                    ))}
                  </div>
                  <Card.Text className="fst-italic">
                    "The nutrition coaching program completely changed my relationship with food. I've lost 20 pounds and feel better than ever!"
                  </Card.Text>
                  <p className="fw-bold mb-0">Client Name {index + 1}</p>
                  <small className="text-muted">Lost 20 lbs in 3 months</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Contact Form */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Ready to Transform Your Nutrition?</h2>
              <p className="lead mb-5">Fill out the form below and one of our nutrition coaches will contact you within 24 hours.</p>
              
              <Form className="text-start">
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="tel" placeholder="Enter phone number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Your Goals</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Tell us about your nutrition goals" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="danger" size="lg" className="px-5 mt-3">Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NutritionCoaching;