import React from "react";
import "./about.css";
import me from "./me.jpg";
const About = () => {
  return (
    <>
      <div className="container-contact" id="about">
        <div className="image">
          <img className="me-image" src={me} alt="me.jpg" />
        </div>
        <div className="about-me">
          <h2 className="about-me-me">
            Inquisitive, energetic computer science student skilled in
            leadership with a strong foundation in math, logic, and cross
            platform coding. Seeking to leverage solid skills in collaboration,
            communication and development as a Software Engineer and Developer.
          </h2>
          <h2 className="about-me-2">
            In my free time , I code in c++ on many platforms such as
            codeforces, codechef , hackerrank. To enhance my css skills, I
            frequently code on cssbattles.
          </h2>
          <h2 className="about-me-3">
            I have a diverse set of skills ranging from design, development like
            HTML, CSS all the way to node.js and mongoDB.
          </h2>
          <h2 className="about-me-4">
            I enjoy building everything from the smallest of web pages to rich
            interactive web apps. Moreover, I enjoy coding competitevely to know
            where I stand and I need to improve myself more and more.
          </h2>
          <h2 className="about-me-5">
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of football, outdoor activities, TV
            series and English literature. Interested in the entire frontend
            spectrum and working on ambitious projects with positive people.
          </h2>
        </div>
      </div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
    </>
  );
};

export default About;
