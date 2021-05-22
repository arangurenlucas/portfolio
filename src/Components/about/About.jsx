import React from "react";
import "./about.css";
import aboutImage from "../../media/aboutImage.jpg";
export default function About() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          molestias aperiam perspiciatis dolorum reprehenderit accusamus rem,
          suscipit quaerat consectetur nihil distinctio asperiores nostrum
          incidunt officiis qui natus ut corporis pariatur!
        </p>
      </div>
      <div className="about-img">
        <img src={aboutImage} alt='about'></img>
      </div>
    </div>
  );
}
