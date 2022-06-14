import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
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
            <li onclick="navHighlighter()"></li>
            <li onclick="navHighlighter()">
              <a href="/contact">HOME</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/contact">ABOUT</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/contact">SKILLS</a>
            </li>
            <li onclick="navHighlighter()">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="main-content">
        {/*<h3>click the menu to hop sections</h3>
        <div className="arrow">⇴</div>*/}
        <section id="home">
          <a href="/" className="glitch" data-glitch="PRAJWAL">
            PRAJWAL
          </a>
          {/*
          <div className="pc" id="pc">
            <div className="p">
              <div className="vertical"></div>
              <div className="p-semicircle"></div>
            </div>
            <div className="c">
              <div className="c1"></div>
              <div className="c2"></div>
            </div>
          </div>
  */}
          <h1 className="heading">
            HELLO, <br />
            THIS IS PRAJWAL. <br />A SOFTWARE AND FULL STACK DEV.
          </h1>
        </section>
        {/*<section id="about">
          <h2>ABOUT</h2>
        </section>
        <section id="skills">
          <h2>SKILLS</h2>
        </section>
        <section id="projects">
          <h2>PROJECTS</h2>
        </section>
        <section id="contact">
          <h2>CONTACT</h2>
</section> */}
      </main>
    </>
  );
};

export default Main;
