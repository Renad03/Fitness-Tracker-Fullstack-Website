import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import GroupTraining from "../../Assets/images/group-training.png";
const classes = [
    { name: 'Yoga', days: 'Mon, Wed', time: '10:00 AM', coach: 'Alice' },
    { name: 'Boxing', days: 'Tue, Thu', time: '6:00 PM', coach: 'Bob' },
    { name: 'Pilates', days: 'Wed, Fri', time: '8:00 AM', coach: 'Charlie' },
    { name: 'Zumba', days: 'Thu, Sat', time: '5:00 PM', coach: 'David' },
    { name: 'Circuit Training', days: 'Fri, Sun', time: '7:00 AM', coach: 'Eva' },
    { name: 'Spinning', days: 'Sat, Mon', time: '4:00 PM', coach: 'Frank' }
  ];

  
const GroupCoaching = () => {
  return (
    <>
    <section className=" py-5">
        <h2 className="text-center text-light display-4 mb-3">Group Coaching</h2>
      </section>

      <div className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img src={GroupTraining} alt="Benefits of group training" className="img-fluid rounded mb-4 mb-lg-0 w-100" />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">Benefits of <span className="text-danger">Group Training</span></h2>
              <Row className="g-4">
                <Col className="rounded shadow py-2" sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      <span className="text-white fw-bold">1</span>
                    </div>
                    <h5 className="mb-0">Accountability</h5>
                  </div>
                  <p>
                    Stay motivated with group support and scheduled sessions to keep you consistent.
                  </p>
                </Col>
                <Col className="rounded shadow py-2" sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      <span className="text-white fw-bold">2</span>
                    </div>
                    <h5 className="mb-0">Community</h5>
                  </div>
                  <p>
                    Build relationships with like-minded individuals on similar fitness journeys.
                  </p>
                </Col>
                <Col className="rounded shadow py-2" sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      <span className="text-white fw-bold">3</span>
                    </div>
                    <h5 className="mb-0">Variety</h5>
                  </div>
                  <p>
                    Experience different workout styles and techniques to prevent boredom and plateaus.
                  </p>
                </Col>
                <Col className="rounded shadow py-2" sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      <span className="text-white fw-bold">4</span>
                    </div>
                    <h5 className="mb-0">Value</h5>
                  </div>
                  <p>
                    Get expert coaching at a more affordable price point than one-on-one sessions.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={7} className="mb-4 mb-lg-0">
            <h2 className="mb-4 text-danger">GroupTraining Schedule</h2>
            <div className="table-responsive shadow rounded">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Days</th>
                    <th>Time</th>
                    <th>Coach</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
    {classes.map((cls, index) => (
      <tr key={index}>
        <td>{cls.name}</td>
        <td>{cls.days}</td>
        <td>{cls.time}</td>
        <td>{cls.coach}</td>
        <td>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
              </table>
            </div>
          </Col>
          <Col lg={5}>
            <div className="bg-dark text-white p-4 rounded">
              <h3 className="mb-4">Request Group Training Info</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Interested In</Form.Label>
                  <Form.Select>
                    <option>Select a program</option>
                    <option>HIIT</option>
                    <option>Strength & Conditioning</option>
                    <option>Flexibility & Mobility</option>
                    <option>Total Body Conditioning</option>
                    <option>Cardio Kickboxing</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Questions or Comments</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                  Submit Request
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="bg-dark text-white py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to <span className="text-danger">Join the Group</span>?</h2>
          <p className="lead mb-4">
            Experience the energy, motivation, and results that come from training with a supportive group.
          </p>
          <Button variant="danger" size="lg">Sign Up</Button>
        </Container>
      </div>
    </>
  );
};

export default GroupCoaching;