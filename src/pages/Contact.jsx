import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        ".contact-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          ".contact-flex-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".contact-email-btn",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8",
        );

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "yassine.gorma.elidrisi@gmail.com";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank",
      );
    }
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-track-screen">
        <div className="contact-content-wrapper" ref={contentRef}>
          <p className="contact-subtitle">Have a project in mind ?</p>
          <h1 className="contact-intro-text text-white contact-flex-title">
            <span className="contact-intro-text text-white">LET’S</span>
            <span className="contact-card" ref={cardRef}></span>
            <span className="contact-intro-text text-white">WORK</span>
          </h1>
          <a
            href="mailto:yassine.gorma.elidrisi@gmail.com"
            onClick={handleEmailClick}
            className="contact-email-btn"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="contact-btn-text">
              yassine.gorma.elidrisi@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
