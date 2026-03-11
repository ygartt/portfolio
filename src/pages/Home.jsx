import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contentImage from "../assets/imgs/contentYGARTT.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotate: -2, // had l-touch dyal l-art ;)
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart reverse restart reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section"
      id="home-section"
      data-section-name="Welcome to My world"
    >
      <div className="section-content">
        <img
          ref={imgRef}
          className="content-img"
          src={contentImage}
          alt="YG Art Main"
          style={{ opacity: 0 }}
        />
      </div>
    </section>
  );
}

export default Home;
