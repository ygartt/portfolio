import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DesWorks.css";

gsap.registerPlugin(ScrollTrigger);

const desProjectsData = [
  {
    id: 1,
    num: ".01",
    img: "/imgs/Design/1.webp",
    title: "QOODY Digital Identity",
    desc: "A minimal and bold visual identity merging technology with modern design thinking for a creative digital startup.",
    link: "https://www.behance.net/gallery/248610257/QOODY-Visual-Identity-Design",
  },
  {
    id: 2,
    num: ".02",
    img: "/imgs/Design/2.webp",
    title: "CIH Bank Redesign",
    desc: "A modernized visual identity targeting Generation Z, featuring a reshaped logo while retaining the bank's iconic colors.",
    link: "https://www.behance.net/gallery/246896981/CIH-Bank-Visual-Identity-Redesign",
  },
  {
    id: 3,
    num: ".03",
    img: "/imgs/Design/3.webp",
    title: "Iron Pulse Branding",
    desc: "A bold visual identity for a modern combat sports gym, reflecting strength, intensity, and a true fighting mindset.",
    link: "https://www.behance.net/gallery/244784165/IRON-PULSE-Combat-Sports-Brand-Identity",
  },
  {
    id: 4,
    num: ".04",
    img: "/imgs/Design/4.webp",
    title: "Malmo Visual Identity",
    desc: "A cinematic visual identity for a creative agency, driven by design, storytelling, and digital innovation to build meaningful brands.",
    link: "https://www.behance.net/gallery/242053891/MALMO-Creative-Agency-Visual-Identity",
  },
];

const DesWorks = () => {
  const sectionRef = useRef(null);
  const textBlueRef = useRef(null);
  const textWhiteRef = useRef(null);
  const blackBandRef = useRef(null);
  const slidesRef = useRef([]);
  const cursorRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          backgroundSize: "100%",
          backgroundPosition: "50% 50%",
        },
        {
          backgroundSize: "135%",
          backgroundPosition: "15% 50%",
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const devWorksSection = document.getElementById("devworks");

      if (devWorksSection) {
        let mm = gsap.matchMedia();
        mm.add("(max-width: 991px)", () => {
          devWorksSection.style.paddingBottom = "15vh";
          ScrollTrigger.refresh();
          return () => {
            devWorksSection.style.paddingBottom = "0px";
            ScrollTrigger.refresh();
          };
        });

        ScrollTrigger.create({
          trigger: devWorksSection,
          start: "bottom bottom",
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      }

      gsap.fromTo(
        [textBlueRef.current, textWhiteRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(blackBandRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        duration: 1,
      });

      slidesRef.current.forEach((slide) => {
        tl.to(slide, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          duration: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <section className="desworks-section" id="desworks" ref={sectionRef}>
      <div className="desworks-band blue-band">
        <h1 ref={textBlueRef} className="desworks-intro-text text-white">
          Creative.
        </h1>
      </div>

      <div className="desworks-band black-band" ref={blackBandRef}>
        <div className="track-screen">
          <h1
            ref={textWhiteRef}
            className="desworks-intro-text text-blue showcase-flex-title"
          >
            <span className="desworks-intro-text text-white">show</span>
            <span className="showcase-card" ref={cardRef}></span>
            <span className="desworks-intro-text text-white">case</span>
          </h1>
        </div>

        {desProjectsData.map((project, i) => (
          <div
            className="project-slide"
            key={project.id}
            ref={(el) => (slidesRef.current[i] = el)}
            style={{ zIndex: i + 2 }}
          >
            <img
              src={project.img}
              alt={`${project.title} Blur Background`}
              className="slide-bg-blur"
              onLoad={() => ScrollTrigger.refresh()}
            />

            <div className="desworks-slide-layout">
              <div className="desworks-num-wrapper">
                <div className="desworks-num">{project.num}</div>
              </div>

              <div
                className="slide-content"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="desworks-project-link"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="slide-main-pic"
                    onLoad={() => ScrollTrigger.refresh()}
                  />
                </a>
              </div>

              <div className="desworks-right-wrapper">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="des-custom-cursor" ref={cursorRef}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span className="des-cursor-text">View Project</span>
      </div>
    </section>
  );
};

export default DesWorks;
