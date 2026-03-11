import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/draggable";
import linkIcon from "../assets/imgs/link.png";
import contactImage from "../assets/imgs/contact.png";

gsap.registerPlugin(ScrollTrigger);

const textConfig = {
  desktop: `I'm always looking to collaborate with people who value creativity and purpose, whether it's building a strong brand, designing clean interfaces, or developing digital experiences that feel alive, I love turning simple ideas into something real and inspiring, if you have a project or a vision in mind, let’s bring it to life together.`,
  mobile: `Passionate about creating inspiring digital experiences from simple ideas , If you have a project or vision, let’s bring it to life together ...`,
};

function Contact({ currentPage }) {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mobileMediaQuery.matches);
    mobileMediaQuery.addEventListener("change", handleResize);
    return () => mobileMediaQuery.removeEventListener("change", handleResize);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse restart reverse",
        },
      });

      tl.fromTo(
        ".contact-header h2, .contact-header p",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out" },
      ).fromTo(
        ".contact-email, .contact-image-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: { amount: 0.5, ease: "power2.inOut" },
          ease: "quint.out",
        },
        "-=0.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentPage]);

  return (
    <section
      className="contact"
      id="contact"
      ref={sectionRef}
      data-section-name="Let’s build your vision"
    >
      <div className="contact-header">
        <div className="title-card-wrapper">
          <h2>Get In Touch</h2>
        </div>
        <p>{isMobile ? textConfig.mobile : textConfig.desktop}</p>
      </div>

      <div className="contact-email">
        <a href="mailto:yassine.gorma.elidrisi@gmail.com">
          yassine.gorma.elidrisi@gmail.com
        </a>
        <img src={linkIcon} alt="Arrow Icon" className="email-icon" />
      </div>

      <div className="contact-image-card">
        <img src={contactImage} alt="Contact Abstract" />
      </div>
    </section>
  );
}

export default Contact;
