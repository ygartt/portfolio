import React from "react";
import aboutImage from "./assets/imgs/yg-about.jpg";
import quoteImage from "./assets/imgs/double quote.png";
import about02Image from "./assets/imgs/about02.jpg";

function About() {
  return (
    <section
      className="about"
      id="about"
      data-section-name="A glimpse into who I am"
    >
      <div className="about-content fade-up">
        <div className="about-img fade-up">
          <img src={aboutImage} alt="About Yassine" />
        </div>
        <div className="about-text">
          <img className="dq" src={quoteImage} alt="Quote start" />
          <h2>One special boy</h2>
          <h3>Software Developer & Graphic Designer</h3>
          <p>
            I’m Yassine, a creative soul driven by passion and curiosity, a
            programmer and graphic designer who finds beauty in both logic and
            art, I don’t just write code or create visuals, I craft experiences
            that connect technology with emotion, art is my language, code is my
            tool, and imagination is the space where I truly feel alive, I love
            working on projects that blend creativity with purpose, where every
            color, every line, and every pixel tells a story, for me, art isn’t
            just what I do, it’s who I am ...
          </p>
        </div>
      </div>

      <div className="additional-card fade-up">
        <div className="card-img">
          <img src={about02Image} alt="Artistic representation" />
        </div>
        <div className="card-text-box">
          <p>
            In a world full of creators, true artistry is rare. Many call
            themselves artists, but only a few possess the vision, skill, and
            passion that truly define what it means to create. Talent isn’t
            measured by the number of works one produces, but by the depth,
            authenticity, and emotion each piece carries.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
