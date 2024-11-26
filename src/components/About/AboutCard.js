import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Pratik Raj </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            <br />
            I am a recent B.Tech. graduate from Chaibasa Engineering College branch being Computer Science and Engineering. <span className="purple"> CGPA:8.47 </span>
            <br />
            <br />
            I completed my Higher Secondary from D.A.V. Public School Hehal, Ranchi, Jharkhand stream being Pure Science. Scored <span className="purple"> 84.2% </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Criticism and naysayers will always be there. Use their doubt as fuel to prove them wrong and achieve your dreams!"{" "}
          </p>
          <footer className="blockquote-footer">Pratik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
