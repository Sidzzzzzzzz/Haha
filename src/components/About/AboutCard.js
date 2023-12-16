import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sid </span>
            from <span className="purple"> Nagpur, India.</span>
            <br /> I am a first year student pursuing B.Tech in Computer technology
              at Priyadarshani college of engineering.
            <br />
            Additionally, I am currently learning Apps modding and Adobe Premiere
                pro. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photo editing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
       "Change is impossible in this fog of ignorance."{" "}
          </p>
          <footer className="blockquote-footer">Sidzzz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
