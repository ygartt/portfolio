import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DevWorks.css";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    num: ".01",
    img: "/imgs/1.webp",
    previewLink: "https://reve-marocain.pages.dev/",
    title: "Art Company Website",
    desc: "A digital showcase for an art company, reflecting its creative vision and unique artistic approach.",
  },
  {
    id: 2,
    num: ".02",
    img: "/imgs/2.webp",
    previewLink: "https://malmo-nine.vercel.app/",
    title: "Agency Portfolio",
    desc: "A sleek portfolio for a creative agency specializing in innovative design, branding, and premium packaging services.",
  },
  {
    id: 3,
    num: ".03",
    img: "/imgs/3.webp",
    previewLink: "https://qoody.vercel.app/",
    title: "Company Website",
    desc: "A dynamic website for a Moroccan startup that seamlessly merges advanced technology with digital art.",
  },
  {
    id: 4,
    num: ".04",
    img: "/imgs/4.webp",
    previewLink: "https://portfolio-hamzaanoujja.vercel.app/",
    title: "Designer Portfolio",
    desc: "A personal portfolio that reflects the identity of a graphic designer while beautifully exhibiting their artwork.",
  },
];

const DevWorks = () => {
  const sectionRef = useRef(null);
  const dividerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const titleTextRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorX = useRef(null);
  const cursorY = useRef(null);

  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    cursorX.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    cursorY.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 992px)",
        isMobile: "(max-width: 991px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(sectionRef.current, { backgroundColor: "#000000" }, 0)
          .to(dividerRef.current, { backgroundColor: "#ffffff" }, 0)
          .to(
            titleContainerRef.current,
            {
              x: "50vw",
              xPercent: -50,
              marginLeft: () => -titleContainerRef.current.offsetLeft,
            },
            0,
          )
          .to(
            titleTextRef.current,
            {
              scale: isDesktop ? 1.8 : 1,
              color: "#ffffff",
              transformOrigin: "center center",
            },
            0,
          )
          .to(".project-text", { color: "#ffffff" }, 0)
          .to(".title-arrow", { opacity: 1, scale: 1 }, 0);

        const topDivider = dividerRef.current;
        gsap.fromTo(
          topDivider,
          { width: "0%" },
          {
            width: isMobile ? "90%" : "94%",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: topDivider,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          },
        );

        const projectDividers = gsap.utils.toArray(".project-divider");
        projectDividers.forEach((divider) => {
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

        const items = gsap.utils.toArray(".project-list-item");
        items.forEach((item) => {
          const num = item.querySelector(".project-num");
          const center = item.querySelector(".project-center");
          const rightTexts = item.querySelectorAll(
            ".project-right h3, .project-right p",
          );

          const entranceTl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          });

          entranceTl
            .fromTo(
              num,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
              0,
            )
            .fromTo(
              center,
              { opacity: 0, y: 100 },
              { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
              0.1,
            )
            .fromTo(
              rightTexts,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
              },
              0.3,
            );
        });
      },
    );

    return () => mm.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (cursorX.current && cursorY.current) {
      cursorX.current(e.clientX);
      cursorY.current(e.clientY);
    }
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
    <>
      <section className="devworks-section" id="devworks" ref={sectionRef}>
        <div className="devworks-divider" ref={dividerRef}></div>

        <div className="devworks-row">
          <div className="devworks-title-wrapper" ref={titleContainerRef}>
            <h2 ref={titleTextRef} className="featured-title">
              <span className="Ftitle">( Featured Projects )</span>
              <svg
                className="title-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="10 15 15 20 20 15"></polyline>
                <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
              </svg>
            </h2>
          </div>
        </div>

        <div className="devworks-content">
          <div className="projects-list">
            {projectsData.map((project) => (
              <div className="project-list-item" key={project.id}>
                <div className="project-num project-text" id="num">
                  {project.num}
                </div>

                <div
                  className="project-center"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-img"
                      onLoad={() => ScrollTrigger.refresh()}
                    />
                  </a>
                </div>

                <div className="project-right">
                  <h3 className="project-text">{project.title}</h3>
                  <p className="project-text">{project.desc}</p>
                </div>

                <div className="project-divider"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="dev-custom-cursor" ref={cursorRef}>
        <svg
          width="12"
          height="12"
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
        <span className="dev-cursor-text">View Website</span>
      </div>
    </>
  );
};

export default DevWorks;
