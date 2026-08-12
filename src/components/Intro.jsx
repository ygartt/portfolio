import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Intro.css";

const Intro = ({ onComplete }) => {
  const introRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.fromTo(
        logoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.5, ease: "power2.inOut" },
      ).to(
        introRef.current,
        {
          y: "-100%",
          duration: 1.5,
          ease: "power4.inOut",
        },
        "+=1",
      );
    }, introRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="intro-wrapper" ref={introRef}>
      <div className="intro-black-band">
        <img
          src="/imgs/logo.png"
          alt="Logo"
          className="intro-logo"
          ref={logoRef}
        />
      </div>
      <div className="intro-blue-band"></div>
    </div>
  );
};

export default Intro;
