import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import OnlineCoachingImage from "../../Assets/images/online-coaching.png";

const OnlineCoaching = () => {
  return (
    <>
      <div className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4"><span className="text-danger">Online</span> Coaching</h1>
              <p className="lead mb-4">
                Expert fitness guidance and personalized training from anywhere in the world. Train on your schedule with our certified coaches.
              </p>
              <Button variant="danger" size="lg" className="mb-4">
                Start Your Online Coaching
              </Button>
            </Col>
            <Col lg={6}>
              <div className="rounded p-4">
                <img 
                  src={OnlineCoachingImage}
                  alt="Online coaching session" 
                  className="img-fluid rounded" 
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <h2 className="text-center text-light mb-5">How Our <span className="text-danger">Online Coaching</span> Works</h2>
        <Row className="g-4">
          <Col  md={3}>
            <Card className="h-100 bg-dark text-white border-0 shadow">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle bg-danger d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "70px", height: "70px" }}>
                  <span className="text-white fw-bold fs-2">1</span>
                </div>
                <Card.Title className="fw-bold">Virtual Assessment</Card.Title>
                <Card.Text>
                  Complete our comprehensive assessment to help us understand your goals, limitations, and fitness history.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-white border-0 shadow">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle bg-danger d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "70px", height: "70px" }}>
                  <span className="text-white fw-bold fs-2">2</span>
                </div>
                <Card.Title className="fw-bold">Personalized Plan</Card.Title>
                <Card.Text>
                  Receive a custom workout program designed specifically for your goals and available equipment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-white border-0 shadow">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle bg-danger d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "70px", height: "70px" }}>
                  <span className="text-white fw-bold fs-2">3</span>
                </div>
                <Card.Title className="fw-bold">Coach Support</Card.Title>
                <Card.Text>
                  Get regular check-ins, form reviews, and ongoing guidance from your dedicated coach.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 bg-dark text-white border-0 shadow">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle bg-danger d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "70px", height: "70px" }}>
                  <span className="text-white fw-bold fs-2">4</span>
                </div>
                <Card.Title className="fw-bold">Track Progress</Card.Title>
                <Card.Text>
                  Monitor your results through our app and adjust your program as needed to ensure continued progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="text-white py-5">
        <Container>
          <h2 className="text-center mb-5">Our Online <span className="text-danger">Coaching Packages</span></h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 bg-black text-white border-0">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold">Basic</h3>
                    <div className="d-flex justify-content-center align-items-baseline my-3">
                      <span className="h1 text-danger fw-bold">$79</span>
                      <span className="ms-1">/month</span>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✓ Custom workout program</li>
                    <li className="mb-2">✓ Monthly program updates</li>
                    <li className="mb-2">✓ Email support</li>
                    <li className="mb-2 text-danger">✗ Video call consultations</li>
                    <li className="mb-2 text-danger">✗ Nutrition guidance</li>
                    <li className="text-danger">✗ Form video analysis</li>
                  </ul>
                  <Button variant="outline-danger" className="w-100">Select Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 bg-danger text-white border-0">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold">Premium</h3>
                    <div className="d-flex justify-content-center align-items-baseline my-3">
                      <span className="h1 fw-bold">$149</span>
                      <span className="ms-1">/month</span>
                    </div>
                    <span className="badge bg-white text-danger">Most Popular</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✓ Custom workout program</li>
                    <li className="mb-2">✓ Bi-weekly program updates</li>
                    <li className="mb-2">✓ Priority email support</li>
                    <li className="mb-2">✓ Monthly video call</li>
                    <li className="mb-2">✓ Basic nutrition guidance</li>
                    <li className="text-muted">✗ Form video analysis</li>
                  </ul>
                  <Button variant="light" className="w-100 text-danger">Select Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 bg-black text-white border-0">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold">Elite</h3>
                    <div className="d-flex justify-content-center align-items-baseline my-3">
                      <span className="h1 text-danger fw-bold">$249</span>
                      <span className="ms-1">/month</span>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✓ Custom workout program</li>
                    <li className="mb-2">✓ Weekly program updates</li>
                    <li className="mb-2">✓ 24/7 message support</li>
                    <li className="mb-2">✓ Bi-weekly video calls</li>
                    <li className="mb-2">✓ Detailed nutrition plan</li>
                    <li>✓ Unlimited form video analysis</li>
                  </ul>
                  <Button variant="outline-danger" className="w-100">Select Plan</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="bg-dark text-white py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to <span className="text-danger">Transform</span> Your Fitness?</h2>
          <p className="lead mb-4">
            Experience the convenience of professional coaching from anywhere in the world.
          </p>
          <Button variant="danger" size="lg">Start Your Online Coaching Today</Button>
        </Container>
      </div>
    </>
  );
};

export default OnlineCoaching;