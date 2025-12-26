import React, { useState, useEffect } from "react";

import rmImage from "../assets/imgs/works/1-RM.jpg";
import jaleoImage from "../assets/imgs/works/2-jaleo.jpg";
import qoodyImage from "../assets/imgs/works/qoody.jpg";
import imapImage from "../assets/imgs/works/4-Imap.jpg";
import automgImage from "../assets/imgs/works/automg.jpg";
import waveyiImage from "../assets/imgs/works/waveyi.jpg";
import atlasImage from "../assets/imgs/works/AtlasRide.jpg";

const worksData = [
  {
    id: 1,
    imageSrc: rmImage,
    altText: "RM Project",
    description:
      "A website for a Moroccan startup focused on art, fan castings, production, and more.",
    link: "https://reve-marocain.pages.dev",
    isComingSoon: false,
  },
  {
    id: 2,
    imageSrc: jaleoImage,
    altText: "Jaleo Project",
    description:
      "A vibrant website for Jaleo, a popular cafe and bar located in the heart of Spain.",
    link: "https://jaleo-cafe.pages.dev",
    isComingSoon: false,
  },
  {
    id: 3,
    imageSrc: qoodyImage,
    altText: "Qoody Project",
    description:
      "Developed a modern website for a web agency specializing in the sale of digital products and services.",
    link: "https://qoody.vercel.app",
    isComingSoon: false,
  },
  {
    id: 4,
    imageSrc: atlasImage,
    altText: "Atlas Ride",
    description:
      "A sleek VIP website for Atlas Ride, showcasing an exclusive fleet of classic and premium vehicles.",
    link: "https://atlas-ride.com",
    isComingSoon: false,
  },
  {
    id: 5,
    imageSrc: automgImage,
    altText: "Auto MG cars",
    description:
      "Sleek and dynamic website for Atlas Ride, showcasing classic and special cars with style and flair.",
    link: null,
    isComingSoon: true,
  },

  {
    id: 6,
    imageSrc: waveyiImage,
    altText: "Waveyi Clothing",
    description:
      "Trendy and vibrant e-commerce site for Waveyi, tailored for Gen Z fashion lovers and modern shoppers.",
    link: null,
    isComingSoon: true,
  },
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

function Works() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const textConfig = {
    desktop: `This gallery represents a cross-section of my development capabilities, focusing on clean code and functional solutions ... Each piece was an opportunity to solve a unique technical problem, craft a compelling user experience, and deliver a polished, high-performance product.`,
    mobile: `Each piece was an opportunity to solve a unique technical problem, craft a compelling user experience, and deliver a polished, high-performance product.`,
  };

  return (
    <section
      className="works fade-up"
      id="works"
      data-section-name="A Look at My Work"
    >
      <div className="works-header">
        <h2>My Latest Projects</h2>

        <p>{isMobile ? textConfig.mobile : textConfig.desktop}</p>
      </div>

      <div className="works-container">
        {worksData.map((work) => (
          <div
            className="work-card"
            key={work.id}
            id={work.id === 5 || work.id === 6 ? "w5and6" : undefined}
          >
            <div className="work-img-container">
              <img
                className="main-work-img"
                src={work.imageSrc}
                alt={work.altText}
              />
            </div>
            <div className="work-desc">
              <p>{work.description}</p>

              {work.isComingSoon ? (
                <span className="work-btn">
                  Project Coming Soon <i className="fas fa-clock"></i>
                </span>
              ) : (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-btn"
                >
                  Explore the Live Site <i className="fas fa-compass"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
