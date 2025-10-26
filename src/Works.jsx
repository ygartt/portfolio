import React, { useEffect } from "react";

function Works() {
  useEffect(() => {
    const textUpdateConfig = {
      "works-header-p": {
        desktop: `This gallery represents a cross-section of my development capabilities, focusing on clean code and functional solutions ... Each piece was an opportunity to solve a unique technical problem, craft a compelling user experience, and deliver a polished, high-performance product.`,
        mobile: `Showcasing development projects with clean code and high-performance user experiences.`,
      },
      "work-desc-1": {
        desktop: `A website for a Moroccan startup focused on art, fan castings, production, and more.`,
        mobile: `Website for Rêve Marocain, a Moroccan art & production startup.`,
      },
      "work-desc-2": {
        desktop: `A vibrant website for Jaleo, a popular cafe and bar located in the heart of Spain.`,
        mobile: `Dynamic website for Jaleo, a popular cafe & bar in Spain.`,
      },
      "work-desc-3": {
        desktop: `An elegant e-commerce platform for a boutique that sells high-end Moroccan caftans.`,
        mobile: `E-commerce site for Evora, selling luxury Moroccan caftans.`,
      },
      "work-desc-4": {
        desktop: `A professional site for an academy offering various formations and educational courses.`,
        mobile: `Professional website for IMAP, an academy offering courses.`,
      },
      "work-desc-5": {
        desktop: `Developed a modern website for a web agency specializing in the sale of digital products and services.`,
        mobile: `Website for a web agency selling digital products.`,
      },
      "work-desc-6": {
        desktop: `Built a sophisticated e-commerce site focused on luxury clothing, featuring a premium user experience.`,
        mobile: `E-commerce platform for a luxury clothing brand.`,
      },
    };

    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    function updateWorksTexts() {
      const isMobile = mobileMediaQuery.matches;
      for (const id in textUpdateConfig) {
        const element = document.getElementById(id);
        if (element) {
          if (!element.dataset.desktopText) {
            element.dataset.desktopText = element.textContent;
          }
          element.textContent = isMobile
            ? textUpdateConfig[id].mobile
            : element.dataset.desktopText;
        }
      }
    }

    updateWorksTexts();
    mobileMediaQuery.addEventListener("change", updateWorksTexts);

    return () =>
      mobileMediaQuery.removeEventListener("change", updateWorksTexts);
  }, []);

  return (
    <section
      className="works fade-up"
      id="works"
      data-section-name="A Look at My Work"
    >
      <div className="works-header">
        <h2>My Latest Projects</h2>
        <p id="works-header-p">
          This gallery represents a cross-section of my development
          capabilities, focusing on clean code and functional solutions ... Each
          piece was an opportunity to solve a unique technical problem, craft a
          compelling user experience, and deliver a polished, high-performance
          product.
        </p>
      </div>
      <div className="works-container">
        <div className="work-card">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src="/imgs/works/1-RM.jpg"
              alt="RM Project"
            />
          </div>
          <div className="work-desc">
            <p id="work-desc-1">
              A website for a Moroccan startup focused on art, fan castings,
              production, and more.
            </p>
            <a
              href="https://reve-marocain.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              Explore the Live Site
              <i className="fas fa-compass"></i>
            </a>
          </div>
        </div>
        <div className="work-card">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src="/imgs/works/2-jaleo.jpg"
              alt="Jaleo Project"
            />
          </div>
          <div className="work-desc">
            <p id="work-desc-2">
              A vibrant website for Jaleo, a popular cafe and bar located in the
              heart of Spain.
            </p>
            <a
              href="https://jaleo-cafe.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              Explore the Live Site
              <i className="fas fa-compass"></i>
            </a>
          </div>
        </div>
        <div className="work-card">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src="/imgs/works/3-Evora.jpg"
              alt="Evora Project"
            />
          </div>
          <div className="work-desc">
            <p id="work-desc-3">
              An elegant e-commerce platform for a boutique that sells high-end
              Moroccan caftans.
            </p>
            <a
              href="https://evora-couture.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              Explore the Live Site
              <i className="fas fa-compass"></i>
            </a>
          </div>
        </div>
        <div className="work-card">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src="/imgs/works/4-Imap.jpg"
              alt="Imap Project"
            />
          </div>
          <div className="work-desc">
            <p id="work-desc-4">
              A professional site for an academy offering various formations and
              educational courses.
            </p>
            <a
              href="https://imap-academy.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              Explore the Live Site
              <i className="fas fa-compass"></i>
            </a>
          </div>
        </div>
        <div className="work-card">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src="/imgs/works/5-Ameed.jpg"
              alt="Digital Agency Project"
            />
          </div>
          <div className="work-desc">
            <p id="work-desc-5">
              Developed a modern website for a web agency specializing in the
              sale of digital products and services.
            </p>
            <span className="work-btn">
              Project Coming Soon
              <i className="fas fa-clock"></i>
            </span>
          </div>
        </div>
        <div className="work-card">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src="/imgs/works/6 - malmo.jpg"
              alt="Luxury Clothing E-commerce"
            />
          </div>
          <div className="work-desc">
            <p id="work-desc-6">
              Built a sophisticated e-commerce site focused on luxury clothing,
              featuring a premium user experience.
            </p>
            <span className="work-btn">
              Project Coming Soon
              <i className="fas fa-clock"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
