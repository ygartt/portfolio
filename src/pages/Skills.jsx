import React, { useState, useEffect } from "react";
import laptopImg from "../assets/imgs/laptop.png";
import javaIcon from "../assets/imgs/skills/tech/1-java.png";
import jsIcon from "../assets/imgs/skills/tech/2-js.png";
import viteIcon from "../assets/imgs/skills/tech/3-vite.png";
import reactIcon from "../assets/imgs/skills/tech/4-react.png";
import gitIcon from "../assets/imgs/skills/tech/5-git.png";
import phpIcon from "../assets/imgs/skills/tech/6-php.png";
import mysqlIcon from "../assets/imgs/skills/tech/7-mysql.png";
import tailwindIcon from "../assets/imgs/skills/tech/8-Tailwind.png";
import vscodeIcon from "../assets/imgs/skills/soft/1-vscode.png";
import intellijIcon from "../assets/imgs/skills/soft/2-IntelliJ.png";
import psIcon from "../assets/imgs/skills/soft/4-adobePs.png";
import aiIcon from "../assets/imgs/skills/soft/5-adobeiL.png";
import blenderIcon from "../assets/imgs/skills/log/1-blender.png";
import flStudioIcon from "../assets/imgs/skills/log/3-Fl studio.png";
import autocadIcon from "../assets/imgs/skills/log/5-autocad.webp";
import officeIcon from "../assets/imgs/skills/log/6-Microsoft.png";

const techStack = [
  { src: javaIcon, alt: "Java Logo" },
  { src: jsIcon, alt: "JavaScript Logo" },
  { src: viteIcon, alt: "Vite Logo" },
  { src: reactIcon, alt: "React Logo" },
  { src: gitIcon, alt: "Git Logo" },
  { src: phpIcon, alt: "PHP Logo" },
  { src: mysqlIcon, alt: "MySQL Logo" },
  { src: tailwindIcon, alt: "Tailwind CSS Logo" },
];

const softwareToolkit = [
  { src: vscodeIcon, alt: "Visual Studio Code" },
  { src: intellijIcon, alt: "IntelliJ" },
  { src: psIcon, alt: "Adobe Photoshop" },
  { src: aiIcon, alt: "Adobe Illustrator" },
];

const otherSkills = [
  { src: blenderIcon, alt: "blender" },
  { src: flStudioIcon, alt: "fl studio" },
  { src: autocadIcon, alt: "autoCad" },
  { src: officeIcon, alt: "Office" },
];

const desktopText = `As a creative professional who bridges the gap between logic and art, my toolkit reflects my dual expertise. I’m both a graphic designer and a software developer , a combination that allows me to create work that’s not only functional and efficient but also visually striking ... I believe great design and smart code go hand in hand to build experiences that connect beauty with purpose.`;
const mobileText = `Blending design aesthetics with development skills to create functional and visually appealing digital experiences.`;

function Skills() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    const handleScreenChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleScreenChange);

    return () =>
      mobileMediaQuery.removeEventListener("change", handleScreenChange);
  }, []);

  return (
    <section
      className="skills fade-up"
      id="skills"
      data-section-name="My Technical Skills"
    >
      <div className="skills-layout-container">
        <div className="skill-card left-card">
          <img src={laptopImg} alt="Laptop" className="laptop-img" />
        </div>

        <div className="skill-card center-card">
          <h2>My Skills</h2>
          <p id="skills-description-p">{isMobile ? mobileText : desktopText}</p>
        </div>

        <div className="skill-card right-card">
          <div className="skills-group">
            <h3>My Tech Stack</h3>
            <div className="skills-icon-grid">
              {techStack.map((skill) => (
                <img key={skill.alt} src={skill.src} alt={skill.alt} />
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>My Software Toolkit</h3>
            <div className="skills-icon-grid">
              {softwareToolkit.map((skill) => (
                <img key={skill.alt} src={skill.src} alt={skill.alt} />
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Other Software & Skills</h3>
            <div className="skills-icon-grid">
              {otherSkills.map((skill) => (
                <img key={skill.alt} src={skill.src} alt={skill.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
