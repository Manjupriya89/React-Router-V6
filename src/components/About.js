import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      
      <p className="desc">
        Boot Camps prepare you for the fields of web development, data science,
        UX/UI, or artificial intelligence <br /> through a hands-on, remote
        classroom environment. We empower talented instructors to teach
        in-demand <br />
        skills and a dedicated support team to provide you with extensive
        support along the way.
      </p>
      <figure><img src='Information-Technology-Courses-Webpage-Image-2.png' width='100%' height='300px' alt='Information Technology'/></figure>
      <div>
        <label className="listLabel">Learn How to Code</label>
        <div className="listContainer">
          <ul className="listItems">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>EXT-JS </li>
          </ul>
          <ul className="listItems">
            <li>REACT</li>
            <li>PROGRESSIVE WEB DESIGN</li>
            <li>TYPESCRIPT</li>
            <li>NEXT-JS</li>
            <li>EXPRESS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
