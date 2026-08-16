import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const mainStack = [
  { file: "1-mongoDB.png", name: "MongoDB" },
  { file: "2-expressJS.png", name: "Express.js" },
  { file: "3-react.png", name: "React.js" },
  { file: "4-nodeJS.png", name: "Node.js" },
  { file: "ThreeJs.png", name: "Three.js" },
  { file: "6-nextJS.png", name: "Next.js" },
  { file: "8-Tailwind.png", name: "Tailwind" },
  { file: "Gsap.png", name: "Gsap" },
];

const otherTech = [
  { file: "java.png", name: "Java" },
  { file: "Laravel.webp", name: "Laravel" },
  { file: "10-git.png", name: "Git" },
  { file: "socket-io.png", name: "Socket.io" },
  { file: "12-github.png", name: "GitHub" },
  { file: "13-postman.png", name: "Postman" },
  { file: "14-vscode.png", name: "VS Code" },
  { file: "15-IntelliJ.png", name: "IntelliJ" },
  { file: "16-SQLserver.png", name: "SQL Server" },
];

const designBranding = [
  { file: "17-adobePs.png", name: "Photoshop" },
  { file: "19-affinity.png", name: "Affinity" },
  { file: "18-adobeAi.png", name: "Illustrator" },
  { file: "20-Capcut.png", name: "Capcut" },
  { file: "21-blender.png", name: "Blender" },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".about-row");

      rows.forEach((row) => {
        const title = row.querySelector(".about-title h2");
        const contentItems = row.querySelectorAll(
          ".about-content p, .skill-group, .bring-list li, .signature-img",
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.fromTo(
          title,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          0,
        ).fromTo(
          contentItems,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
          0.2,
        );
      });

      const dividers = gsap.utils.toArray(".about-divider");

      dividers.forEach((divider) => {
        gsap.fromTo(
          divider,
          { width: "0%" },
          {
            width: "100%",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: divider,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-row">
        <div className="about-title">
          <h2>( Who I Am )</h2>
        </div>
        <div className="about-content">
          <p>
            A Frontend Engineer & Visual Designer passionate about turning ideas
            into bold digital experiences. I combine development, visual design,
            3D, and AI to create work that feels distinctive, intuitive, and
            thoughtfully crafted. My approach blends technical precision with
            creative direction, always pushing for experiences that are not only
            functional, but memorable.
          </p>
        </div>
      </div>

      <div className="about-divider"></div>

      <div className="about-row">
        <div className="about-title">
          <h2>( My Expertise )</h2>
        </div>
        <div className="about-content">
          <div className="skills-container">
            <div className="skill-group">
              <h3>My Main Stack</h3>
              <div className="skills-grid">
                {mainStack.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img
                      src={`/imgs/skills/${skill.file}`}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Tools & Technologies</h3>
              <div className="skills-grid">
                {otherTech.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img
                      src={`/imgs/skills/${skill.file}`}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Design & Branding</h3>
              <div className="skills-grid">
                {designBranding.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img
                      src={`/imgs/skills/${skill.file}`}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-divider"></div>

      <div className="about-row">
        <div className="about-title">
          <h2>( What I Bring )</h2>
        </div>
        <div className="about-content">
          <ul className="bring-list">
            <li>
              Created 10+ brand identities, developing complete visual systems
              that help brands build a strong and memorable presence.
            </li>
            <li>
              Developed 10+ landing pages and 2 SaaS platforms, transforming
              ideas into functional and scalable digital products.
            </li>
            <li>
              Worked with 20+ clients, helping them build and grow their brands
              through design and technology.
            </li>
          </ul>
          <img
            src="/imgs/sing.png"
            alt="Signature"
            className="signature-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
