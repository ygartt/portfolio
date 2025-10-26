import React, { useEffect } from "react";
import logoImage from "./assets/imgs/logo-png.png";
import linkedinIcon from "./assets/imgs/icons/linkedin.png";
import githubIcon from "./assets/imgs/icons/github.png";
import pinterestIcon from "./assets/imgs/icons/Pinterest.png";

function Header() {
  useEffect(() => {
    const burger = document.getElementById("burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    let burgerClickHandler;
    const linkClickHandlers = [];
    let documentClickHandler;

    if (burger && mobileMenu) {
      burgerClickHandler = () => {
        mobileMenu.classList.toggle("active");
      };
      burger.addEventListener("click", burgerClickHandler);

      mobileLinks.forEach((link) => {
        const handler = () => {
          mobileMenu.classList.remove("active");
        };
        link.addEventListener("click", handler);
        linkClickHandlers.push({ link, handler });
      });

      documentClickHandler = (event) => {
        if (
          mobileMenu.classList.contains("active") &&
          !mobileMenu.contains(event.target) &&
          !burger.contains(event.target)
        ) {
          mobileMenu.classList.remove("active");
        }
      };
      document.addEventListener("click", documentClickHandler);
    }

    const currentSectionNameElement = document.getElementById(
      "current-section-name"
    );
    const sections = document.querySelectorAll("section[data-section-name]");
    let observer;

    if (currentSectionNameElement && sections.length > 0) {
      currentSectionNameElement.textContent =
        sections[0]?.getAttribute("data-section-name") || "Home";

      const isMobileObserver = window.matchMedia("(max-width: 767px)").matches;
      const observerOptions = {
        root: null,
        rootMargin: isMobileObserver ? "-80px 0px 0px 0px" : "0px",
        threshold: isMobileObserver ? 0.45 : 0.3,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section-name");
            if (sectionName) {
              currentSectionNameElement.textContent = sectionName;
            }
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach((section) => {
        observer.observe(section);
      });
    }

    const faders = document.querySelectorAll(".fade-up");
    let appearObserver;
    if (faders.length > 0) {
      const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };
      appearObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      }, appearOptions);
      faders.forEach((fader) => appearObserver.observe(fader));
    }

    const headerElement = document.querySelector(".main-header");
    const scrollLinks = document.querySelectorAll('a[href^="#"], a[href^="."]');
    const scrollLinkHandlers = [];

    scrollLinks.forEach((anchor) => {
      const targetSelector = anchor.getAttribute("href");
      let targetElement = null;

      if (
        targetSelector.startsWith("#") ||
        (targetSelector.startsWith(".") &&
          document.querySelector(targetSelector))
      ) {
        targetElement = document.querySelector(targetSelector);
      }

      if (targetElement) {
        const clickHandler = function (e) {
          e.preventDefault();

          const offset = headerElement ? headerElement.offsetHeight + 10 : 10;
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY - offset;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 1300;
          let startTime = null;

          function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(
              timeElapsed,
              startPosition,
              distance,
              duration
            );
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }

          function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t * t + b;
            t -= 2;
            return (c / 2) * (t * t * t + 2) + b;
          }

          requestAnimationFrame(animation);

          if (mobileMenu && mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active");
          }
        };
        anchor.addEventListener("click", clickHandler);
        scrollLinkHandlers.push({ anchor, handler: clickHandler });
      }
    });

    return () => {
      if (burger && burgerClickHandler) {
        burger.removeEventListener("click", burgerClickHandler);
      }
      linkClickHandlers.forEach(({ link, handler }) => {
        link.removeEventListener("click", handler);
      });
      if (documentClickHandler) {
        document.removeEventListener("click", documentClickHandler);
      }
      if (observer) {
        observer.disconnect();
      }
      if (appearObserver) {
        appearObserver.disconnect();
      }
      scrollLinkHandlers.forEach(({ anchor, handler }) => {
        anchor.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home-section" className="logo">
            <img src={logoImage} alt="YG Logo" className="logo-img" />
          </a>
        </div>
        <div className="nav-center">
          <span id="current-section-name">Home</span>
        </div>
        <div className="nav-right">
          <a
            href="https://www.linkedin.com/in/yassine-gorma-elidrisi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
          </a>
          <a
            href="https://github.com/ygartt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <img src={githubIcon} alt="GitHub" className="social-img" />
          </a>
          <a
            href="https://pin.it/1HPIWQWik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="social-icon"
          >
            <img src={pinterestIcon} alt="Pinterest" className="social-img" />
          </a>
        </div>
        <div className="burger" id="burger-menu">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </nav>
      <div className="mobile-nav-menu" id="mobile-menu">
        <a href="#home-section" className="mobile-link">
          Portfolio
        </a>
        <a href="#about" className="mobile-link">
          who I am
        </a>
        <a href="#skills" className="mobile-link">
          My Skills
        </a>
        <a href="#works" className="mobile-link">
          My works
        </a>
        <a href="#showcase" className="mobile-link">
          My Gallery
        </a>
        <a href="#contact" className="mobile-link">
          Get in Touch
        </a>
        <div className="mobile-socials">
          <a
            href="https://www.linkedin.com/in/yassine-gorma-elidrisi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
          </a>
          <a
            href="https://github.com/ygartt"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={githubIcon} alt="GitHub" className="social-img" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={pinterestIcon} alt="Pinterest" className="social-img" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
