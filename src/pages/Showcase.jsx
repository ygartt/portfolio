import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/draggable";
import backIcon from "../assets/imgs/back.png";
import nextIcon from "../assets/imgs/next.png";
import Lightbox from "./Lightbox";
import showcaseImg1 from "../assets/imgs/showcase/1.jpg";
import showcaseImg2 from "../assets/imgs/showcase/2.jpg";
import showcaseImg3 from "../assets/imgs/showcase/3.jpg";
import showcaseImg4 from "../assets/imgs/showcase/4.jpg";
import showcaseImg5 from "../assets/imgs/showcase/5.jpg";
import showcaseImg6 from "../assets/imgs/showcase/6.jpg";
import showcaseImg8 from "../assets/imgs/showcase/8.jpg";
import showcaseImg9 from "../assets/imgs/showcase/9.jpg";
import showcaseImg10 from "../assets/imgs/showcase/10.jpg";
import showcaseImg11 from "../assets/imgs/showcase/11.jpg";
import showcaseImg13 from "../assets/imgs/showcase/13.jpg";
import showcaseImg14 from "../assets/imgs/showcase/14.jpg";
import showcaseImg15 from "../assets/imgs/showcase/15.jpg";
import FightClubPoster from "../assets/imgs/showcase/FightClubPoster.jpg";
import AmericanPsychoPoster from "../assets/imgs/showcase/AmericanPsychoPoster.jpg";

gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  showcaseImg1,
  showcaseImg2,
  showcaseImg3,
  showcaseImg4,
  showcaseImg5,
  showcaseImg6,
  FightClubPoster,
  AmericanPsychoPoster,
  showcaseImg8,
  showcaseImg9,
  showcaseImg10,
  showcaseImg11,
  showcaseImg13,
  showcaseImg14,
  showcaseImg15,
];

const textConfig = {
  desktop: `This gallery offers an immersive glimpse into my creative universe as a visual designer where imagination meets experimentation and visual storytelling blending artistic photo manipulations branding concepts and digital compositions ... Each creation reflects my passion for exploring form color and emotion to craft visuals that capture attention and evoke connection.`,
  mobile: `A gallery glimpse into my creative visual design, blending artistic manipulation, branding concepts, and digital compositions reflecting my passion.`,
};

function Showcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches,
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef(null);

  const itemsPerPage = 6;
  const pageCount = Math.ceil(showcaseImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = showcaseImages.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
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
        ".showcase-header h2, .showcase-header p",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out" },
      ).fromTo(
        ".showcase-item",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: { amount: 0.8, ease: "power2.inOut" },
          ease: "quint.out",
        },
        "-=0.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentPage]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <section
      ref={sectionRef}
      className="showcase"
      id="showcase"
      data-section-name="A Gallery of My Creative Work"
    >
      <div className="showcase-header">
        <div className="title-card-wrapper">
          <h2>My Creative Gallery</h2>
        </div>
        <p>{isMobile ? textConfig.mobile : textConfig.desktop}</p>
      </div>

      <div className="showcase-grid">
        {currentImages.map((imgSrc, index) => (
          <div
            className="showcase-item"
            key={`${currentPage}-${index}`}
            onClick={() => openLightbox(startIndex + index)}
          >
            <img
              src={imgSrc}
              alt={`Showcase Image ${startIndex + index + 1}`}
            />
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="pagination-controls">
          <button
            className="nav-btn prev"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={backIcon} alt="Back" />
          </button>
          <div className="pagination-numbers">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`pagination-btn ${pageNumber === currentPage ? "active" : ""}`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ),
            )}
          </div>
          <button
            className="nav-btn next"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            <img src={nextIcon} alt="Next" />
          </button>
        </div>
      )}

      <Lightbox
        images={showcaseImages}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </section>
  );
}

export default Showcase;
