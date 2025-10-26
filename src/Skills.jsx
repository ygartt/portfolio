import React, { useEffect } from "react";

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

    updateSkillsText(); // Initial check
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
          <img src="/imgs/laptop.png" alt="Laptop" className="laptop-img" />
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
              <img src="/imgs/skills/tech/1-java.png" alt="Java Logo" />
              <img src="/imgs/skills/tech/2-js.png" alt="JavaScript Logo" />
              <img src="/imgs/skills/tech/3-vite.png" alt="Vite Logo" />
              <img src="/imgs/skills/tech/4-react.png" alt="React Logo" />
              <img src="/imgs/skills/tech/5-git.png" alt="Git Logo" />
              <img src="/imgs/skills/tech/6-php.png" alt="PHP Logo" />
              <img src="/imgs/skills/tech/7-mysql.png" alt="MySQL Logo" />
              <img
                src="/imgs/skills/tech/8-Tailwind.png"
                alt="Tailwind CSS Logo"
              />
            </div>
          </div>

          <div className="skills-group">
            <h3>My Software Toolkit</h3>
            <div className="skills-icon-grid">
              <img
                src="/imgs/skills/soft/1-vscode.png"
                alt="Visual Studio Code"
              />
              <img src="/imgs/skills/soft/2-IntelliJ.png" alt="IntelliJ" />
              <img
                src="/imgs/skills/soft/4-adobePs.png"
                alt="Adobe Photoshop"
              />
              <img
                src="/imgs/skills/soft/5-adobeiL.png"
                alt="Adobe Illustrator"
              />
            </div>
          </div>

          <div className="skills-group">
            <h3>Other Software & Skills</h3>
            <div className="skills-icon-grid">
              <img src="/imgs/skills/log/1-blender.png" alt="blender" />
              <img src="/imgs/skills/log/3-Fl studio.png" alt="fl studio" />
              <img src="/imgs/skills/log/5-autocad.webp" alt="autoCad" />
              <img src="/imgs/skills/log/6-Microsoft.png" alt="Office" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
