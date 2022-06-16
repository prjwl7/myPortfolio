import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="containers">
        <div className="section1">
          <h1 className="getIn">GET IN TOUCH</h1>
          <br />
          <h2 className="email">email : prjwl888.dkc@gmail.com</h2>
          <h2 className="contact">Contact : +91-9729265172</h2>
        </div>
        <div className="section2">
          <input type="text" placeholder="email" className="emails" />
          <br />
          <input type="text" placeholder="Name" className="name" />
          <br />
          <input type="text" placeholder="Your message" className="message" />
          <br />
          <button className="send">SEND</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
