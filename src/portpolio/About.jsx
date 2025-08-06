
import React from "react";
import aboutImage from "../assets/kalyani.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading"> About</h1>

      <div className="about-content">
      
      
        <div className="text">
          <h2>I am Kalyani, a Frontend Developer</h2>
          <p>
            I am passionate about building user-friendly, responsive web
            applications using technologies like React, HTML, CSS, and
            Bootstrap.
          </p>
        </div>

 
 
        
        <div className="image">
  <img src={aboutImage} alt="Kalyani" />
</div>
      </div>
    </div>
  );
};

export default About;
