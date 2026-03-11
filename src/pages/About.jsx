import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "../assets/imgs/yg-about.jpg";
import quoteImage from "../assets/imgs/double quote.png";
import about02Image from "../assets/imgs/about02.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const mainRef = useRef(null);
  const img1Ref = useRef(null);
  const text1Ref = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(img1Ref.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 85%",
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.from(text1Ref.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: text1Ref.current,
          start: "top 85%",
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play reverse restart reverse",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={mainRef}
      className="about"
      id="about"
      data-section-name="A glimpse into who I am"
    >
      <div className="about-content">
        <div ref={img1Ref} className="about-img">
          <img src={aboutImage} alt="About Yassine" />
        </div>
        <div ref={text1Ref} className="about-text">
          <img className="dq" src={quoteImage} alt="Quote start" />

          <div className="title-card-wrapper-about">
            <h2>One Special boy</h2>
          </div>
          <h3>
            Software Developer <span className="aboutSpan">&</span> Graphic
            Designer
          </h3>
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

      <div ref={cardRef} className="additional-card">
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
