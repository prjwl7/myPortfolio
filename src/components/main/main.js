import React from "react";
import "./main.css";
import video from "../main/bgVideo6.mp4";
const Main = () => {
  return (
    <>
      <video autoPlay muted loop infinite id="myVideo">
        <source src={video} type="video/mp4"></source>
      </video>
      <main className="main-content">
        <section id="home">
          <a href="/" className="glitch" data-glitch="PRAJWAL">
            PRAJWAL
          </a>
        </section>
        <div className="heading">
          <h1 className="thisIs">
            HEY !<br /> THIS IS PRAJWAL. <br /> A SOFTWARE AND FULL STACK WEB
            DEV.
          </h1>
        </div>
      </main>
    </>
  );
};

export default Main;
