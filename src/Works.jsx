import React from "react";
import rmImage from "./assets/imgs/works/1-RM.jpg";
import jaleoImage from "./assets/imgs/works/2-jaleo.jpg";
import evoraImage from "./assets/imgs/works/3-Evora.jpg";
import imapImage from "./assets/imgs/works/4-Imap.jpg";
import ameedImage from "./assets/imgs/works/5-Ameed.jpg";
import malmoImage from "./assets/imgs/works/6 - malmo.jpg";

function Works() {
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
            <img className="main-work-img" src={rmImage} alt="RM Project" />
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
              src={jaleoImage}
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
              src={evoraImage}
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
            <img className="main-work-img" src={imapImage} alt="Imap Project" />
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
        <div className="work-card" id="w5and6">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src={ameedImage}
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
        <div className="work-card" id="w5and6">
          <div className="work-img-container">
            <img
              className="main-work-img"
              src={malmoImage}
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
