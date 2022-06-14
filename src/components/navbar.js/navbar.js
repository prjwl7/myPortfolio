import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <input
          id="page-nav-toggle"
          className="main-navigation-toggle"
          type="checkbox"
        />
        <label for="page-nav-toggle">
          <svg className="icon--menu-toggle" viewBox="0 0 60 30">
            <g className="icon-group">
              <g className="icon--menu">
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
              </g>
              <g className="icon--close">
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
              </g>
            </g>
          </svg>
        </label>

        <nav className="main-navigation">
          <ul>
            <li onclick="navHighlighter()">
              <a href="/">HOME</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/about">ABOUT</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/skills">SKILLS</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/projects">PROJECTS</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
