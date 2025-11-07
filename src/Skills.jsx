import React, { useEffect } from "react";
import laptopImg from "./assets/imgs/laptop.png";
import javaIcon from "./assets/imgs/skills/tech/1-java.png";
import jsIcon from "./assets/imgs/skills/tech/2-js.png";
import viteIcon from "./assets/imgs/skills/tech/3-vite.png";
import reactIcon from "./assets/imgs/skills/tech/4-react.png";
import gitIcon from "./assets/imgs/skills/tech/5-git.png";
import phpIcon from "./assets/imgs/skills/tech/6-php.png";
import mysqlIcon from "./assets/imgs/skills/tech/7-mysql.png";
import tailwindIcon from "./assets/imgs/skills/tech/8-Tailwind.png";
import vscodeIcon from "./assets/imgs/skills/soft/1-vscode.png";
import intellijIcon from "./assets/imgs/skills/soft/2-IntelliJ.png";
import psIcon from "./assets/imgs/skills/soft/4-adobePs.png";
import aiIcon from "./assets/imgs/skills/soft/5-adobeiL.png";
import blenderIcon from "./assets/imgs/skills/log/1-blender.png";
import flStudioIcon from "./assets/imgs/skills/log/3-Fl studio.png";
import autocadIcon from "./assets/imgs/skills/log/5-autocad.webp";
import officeIcon from "./assets/imgs/skills/log/6-Microsoft.png";

function Skills() {
  useEffect(() => {
    const skillsParagraph = document.getElementById("skills-description-p");
    const textUpdateConfig = {
      "skills-description-p": {
        desktop: `As a creative professional who bridges the gap between logic and art, my toolkit reflects my dual expertise. I’m both a graphic designer and a software developer , a combination that allows me to create work that’s not only functional and efficient but also visually striking ... I believe great design and smart code go hand in hand to build experiences that connect beauty with purpose.`,
        mobile: `Blending design aesthetics with development skills to create functional and visually appealing digital experiences.`,
      },
    };
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    function updateSkillsText() {
      const isMobile = mobileMediaQuery.matches;
      if (skillsParagraph) {
        if (!skillsParagraph.dataset.desktopText) {
          skillsParagraph.dataset.desktopText = skillsParagraph.textContent;
        }
        skillsParagraph.textContent = isMobile
          ? textUpdateConfig["skills-description-p"].mobile
          : skillsParagraph.dataset.desktopText;
      }
    }

    updateSkillsText();
    mobileMediaQuery.addEventListener("change", updateSkillsText);

    return () =>
      mobileMediaQuery.removeEventListener("change", updateSkillsText);
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
          <p id="skills-description-p">
            As a creative professional who bridges the gap between logic and
            art, my toolkit reflects my dual expertise. I’m both a graphic
            designer and a software developer , a combination that allows me to
            create work that’s not only functional and efficient but also
            visually striking ... I believe great design and smart code go hand
            in hand to build experiences that connect beauty with purpose.
          </p>
        </div>

        <div className="skill-card right-card">
          <div className="skills-group">
            <h3>My Tech Stack</h3>
            <div className="skills-icon-grid">
              <img src={javaIcon} alt="Java Logo" />
              <img src={jsIcon} alt="JavaScript Logo" />
              <img src={viteIcon} alt="Vite Logo" />
              <img src={reactIcon} alt="React Logo" />
              <img src={gitIcon} alt="Git Logo" />
              <img src={phpIcon} alt="PHP Logo" />
              <img src={mysqlIcon} alt="MySQL Logo" />
              <img src={tailwindIcon} alt="Tailwind CSS Logo" />
            </div>
          </div>

          <div className="skills-group">
            <h3>My Software Toolkit</h3>
            <div className="skills-icon-grid">
              <img src={vscodeIcon} alt="Visual Studio Code" />
              <img src={intellijIcon} alt="IntelliJ" />
              <img src={psIcon} alt="Adobe Photoshop" />
              <img src={aiIcon} alt="Adobe Illustrator" />
            </div>
          </div>

          <div className="skills-group">
            <h3>Other Software & Skills</h3>
            <div className="skills-icon-grid">
              <img src={blenderIcon} alt="blender" />
              <img src={flStudioIcon} alt="fl studio" />
              <img src={autocadIcon} alt="autoCad" />
              <img src={officeIcon} alt="Office" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
