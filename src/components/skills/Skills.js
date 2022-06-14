import React from "react";
import first from "../skills/cplus.png";
import second from "../skills/c.png";
import third from "../skills/HTML.png";
import fourth from "../skills/CSS.png";
import fifth from "../skills/JS.webp";
import sixth from "../skills/react.png";
import seventh from "../skills/node.png";
import eigth from "../skills/mongodb.svg";
import ninth from "../skills/java.png";
import tenth from "../skills/mysql.png";
import eleven from "../skills/python.png";
import "./skills.css";
const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="container">
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
          <img src={fourth} alt="" />
          <img src={ninth} alt="" />
          <img src={eleven} alt="" />
        </div>
        <div className="container1">
          <img src={fifth} alt="" />
          <img src={sixth} alt="" />
          <img src={seventh} alt="" />
          <img src={eigth} alt="" />
          <img src={tenth} alt="" />
        </div>
      </div>
    </>
  );
};

export default Skills;
