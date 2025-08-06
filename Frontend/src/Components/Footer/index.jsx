import React from "react";
import { 
    FaFacebook, FaInstagram, FaYoutube, 
    FaMapMarkerAlt, FaPhone, FaEnvelope 
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Link } from 'react-router-dom';
import "./styles.css";


const Footer = () => {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-2">
              <div className="logo-box me-2"></div>
              <h4 className="mb-0">Fit<span className="text-danger">Maker</span></h4>
            </div>
            <p className="text-light">Transform Your Body</p>
            <p  className="text-light">
              Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over 
              <span className="text-danger"> 5 Years </span>
              of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. 
              <span className="text-warning"> Join Our Community </span> and Start Your Journey Towards a Healthier, Stronger You.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                <SiX />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                <FaYoutube />
              </a>
            </div>

          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h6 className="text-danger mb-3">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li><Link className="text-light" to={'/about-us'}>About Us</Link></li>
              <li><Link className="text-light" to={'/our-services'}>Our Services</Link></li>
              <li><Link className="text-light" to={''}>Careers</Link></li>
              <li><Link className="text-light" to={''}>Blog</Link></li>
              <li><Link className="text-light" to={''}>Testimonial</Link></li>
              <li><Link className="text-light" to={''}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 mb-4">
            <h6 className="text-danger mb-3">Resources</h6>
            <ul className="list-unstyled text-muted small">
              <li> <Link  className="text-light" to={''}>Fitness Tools</Link></li>
              <li> <Link  className="text-light" to={''}>Workout Videos</Link></li>
              <li> <Link  className="text-light" to={''}>Nutrition Guides</Link></li>
              <li> <Link  className="text-light" to={'/faq'}>FAQ</Link></li>
              <li> <Link  className="text-light" to={''}>Success Stories</Link></li>
              <li> <Link  className="text-light" to={'/membership'}>Membership</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-md-2 mb-4">
            <h6 className="text-danger mb-3">Programs</h6>
            <ul className="list-unstyled text-muted small">
              <li> <Link className="text-light" to={'/weight-loss'}>Weight Loss</Link></li>
              <li> <Link className="text-light" to={'/building-muscles'}>Building Muscles</Link></li>
              <li> <Link className="text-light" to={'/home-workout'}>Home Workout</Link></li>
              <li> <Link className="text-light" to={'/gym-plan'}>Gym Plan</Link></li>
              <li> <Link className="text-light" to={'/our-plans'}>Our Plans</Link></li>
              <li> <Link className="text-light" to={'/fitness-group'}>Fitness Group</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2 mb-4">
            <h6 className="text-warning mb-3">Contact Us</h6>
            <ul className="list-unstyled text-light small">
              <li className="text-light"><FaMapMarkerAlt className="me-2" /> Egypt - Cairo</li>
              <li className="text-light"><FaPhone className="me-2" /> 1234-56789</li>
              <li className="text-light"><FaEnvelope className="me-2" /> Fitmakerrr@Gmail.Com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
