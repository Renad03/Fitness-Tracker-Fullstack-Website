import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Header/styles.css";


const FitMakerHeader = () => {
  const location = useLocation();
  
  // Define paths where the Navbar should be hidden
  const hiddenPaths = ["/login", "/register"];

  // If current path matches, don't render the navbar
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div
            className="bg-danger"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          ></div>
          <div>
            <div className="fw-bold m-0">FitMaker</div>
            <div className="text-white-50" style={{ fontSize: "0.7rem" }}>
              Transform Your Body
            </div>
          </div>
        </Navbar.Brand>

        {/* Search icon */}
        <div className="d-flex align-items-center ms-4 d-none d-lg-flex">
          <Search size={20} color="white" />
        </div>

        <div className="d-flex order-lg-last">
          <Link to="/login">
          <Button variant="danger">Logout</Button>
          </Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to={"/"}
              className={`mx-5 ${location.pathname === "/" ? "border-bottom border-danger" : "text-white-50"}`}
            >
              Home
            </Nav.Link>

            <NavDropdown title="Programs" id="programs-dropdown" menuVariant="dark"
              className={`mx-5 ${[
                "/weight-loss",
                "/building-muscles",
                "/home-workout",
                "/gym-plan",
                "/our-plans",
                "/fitness-group"
              ].includes(location.pathname) ? "border-bottom border-danger" : "text-white-50"}`}
            >
              <NavDropdown.Item as={Link} to={"/weight-loss"}> Weight Loss </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/building-muscles"}> Building Muscles </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/home-workout"}> Home Workout </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/gym-plan"}> Gym Plan </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/our-plans"}>Our Plans </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/fitness-group"}>Fitness Group </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Coaching" id="programs-dropdown" menuVariant="dark"
              className={`mx-5 ${[
                "/one-on-one-coaching",
                "/group-coaching",
                "/online-coaching",
                "/nutrition-coaching",
                "/trainers"
                ].includes(location.pathname) ? "border-bottom border-danger" : "text-white-50"}`}>

              <NavDropdown.Item as={Link} to={"/one-on-one-coaching"}>1-on-1 Coaching</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/group-coaching'}>Group Coaching</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/online-coaching'}>Online Coaching</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/nutrition-coaching'}>Nutrition Coaching</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/trainers">Meet Our Coaches</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/membership" className={`mx-5 ${location.pathname === "/membership" ? "border-bottom border-danger" : "text-white-50"}`}>
              Membership
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className={`mx-5 ${location.pathname === "/about-us" ? "border-bottom border-danger" : "text-white-50"}`}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className={`mx-5 ${location.pathname === "/profile" ? "border-bottom border-danger" : "text-white-50"}`}>
              My Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FitMakerHeader;
