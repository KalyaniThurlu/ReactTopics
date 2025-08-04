
import React from "react";
import aboutImage from "../assets/kalyani.jpeg";

const About = () => {
  return (
    <div className="about-container" style={{ padding: "20px" }}>
      <h1
        className="about-heading"
        style={{ textAlign: "center", color: "#333", marginTop: "20px" }}
      >
        This is About Component
      </h1>

      <div
        className="about-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        {/* Left Side: Text */}
        <div
          style={{
            flex: "1",
            fontSize: "16px",
            lineHeight: "1.6",
            paddingRight: "20px",
          }}
        >
          <h2>I am Kalyani, a Frontend Developer</h2>
          <p>
            I am passionate about building user-friendly, responsive web
            applications using technologies like React, HTML, CSS, and
            Bootstrap.
          </p>
        </div>

        {/* Right Side: Image */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src={aboutImage}
            alt="about"
            style={{ width: "80%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
