import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";
import { Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import pc from "../components/ppcc.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
          <img src={pc} alt="" className="imageTag" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <NavbarCollapse>
          <Nav className="topNav">
            <Nav.Link>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/skills" className="nav-link">
                SKILLS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" className="nav-link">
                PROJECTS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
