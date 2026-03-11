import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/draggable";
import linkIcon from "../assets/imgs/link.png";

import pic1 from "../assets/imgs/contact/1.jpg";
import pic2 from "../assets/imgs/contact/2.jpg";
import pic3 from "../assets/imgs/contact/3.jpg";

gsap.registerPlugin(ScrollTrigger, Draggable);

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
      )
        .fromTo(
          ".contact-email",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8",
        )
        .fromTo(
          ".contact-card",
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            stagger: { amount: 0.5, ease: "power2.inOut" },
            ease: "quint.out",
          },
          "-=1",
        );

      Draggable.create(".contact-card", {
        bounds: sectionRef.current,
        inertia: true,
        onPress: function () {
          gsap.set(this.target, { zIndex: 100 });
          gsap.set(".contact-card:not(:hover)", { zIndex: (i) => i + 1 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [currentPage]);

  const cardsData = [
    { id: 1, title: "Agency Website", img: pic1, class: "card-1" },
    { id: 2, title: "Visual Identity", img: pic2, class: "card-2" },
    { id: 3, title: "Social Media Posters", img: pic3, class: "card-3" },
  ];

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

      <div className="contact-cards-container">
        {cardsData.map((card) => (
          <div className={`contact-card ${card.class}`} key={card.id}>
            <div className="card-top-bar">
              <div className="window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="card-title">{card.title}</span>
            </div>
            <div className="card-img-wrapper">
              <img src={card.img} alt={card.title} draggable="false" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
