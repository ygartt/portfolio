import React, { useState, useEffect, useRef } from "react";
import logoImage from "../assets/imgs/logo-png.png";
import linkedinIcon from "../assets/imgs/icons/linkedin.png";
import githubIcon from "../assets/imgs/icons/github.png";
import pinterestIcon from "../assets/imgs/icons/Pinterest.png";

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/yassine-gorma-elidrisi",
    label: "LinkedIn",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/ygartt",
    label: "GitHub",
    icon: githubIcon,
    alt: "GitHub",
  },
  {
    href: "https://pin.it/1HPIWQWik",
    label: "Pinterest",
    icon: pinterestIcon,
    alt: "Pinterest",
  },
];

const navLinks = [
  { href: "#home-section", text: "Portfolio" },
  { href: "#about", text: "who I am" },
  { href: "#skills", text: "My Skills" },
  { href: "#works", text: "My works" },
  { href: "#showcase", text: "My Gallery" },
  { href: "#contact", text: "Get in Touch" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");

  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const headerRef = useRef(null);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = headerRef.current
        ? headerRef.current.offsetHeight + 10
        : 10;
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
      requestAnimationFrame(animation);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section-name]");
    let sectionObserver;
    if (sections.length > 0) {
      setCurrentSection(
        sections[0]?.getAttribute("data-section-name") || "Home"
      );
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
            if (sectionName) setCurrentSection(sectionName);
          }
        });
      };
      sectionObserver = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      sections.forEach((section) => sectionObserver.observe(section));
    }

    const faders = document.querySelectorAll(".fade-up");
    let appearObserver;
    if (faders.length > 0) {
      const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
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

    return () => {
      if (sectionObserver) sectionObserver.disconnect();
      if (appearObserver) appearObserver.disconnect();
    };
  }, []);

  return (
    <header className="main-header" ref={headerRef}>
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home-section" className="logo" onClick={handleSmoothScroll}>
            <img src={logoImage} alt="YG Logo" className="logo-img" />
          </a>
        </div>
        <div className="nav-center">
          <span id="current-section-name">{currentSection}</span>
        </div>

        <div className="nav-right">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon"
            >
              <img src={link.icon} alt={link.alt} className="social-img" />
            </a>
          ))}
        </div>

        <div
          className="burger"
          id="burger-menu"
          ref={burgerRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </nav>

      <div
        className={`mobile-nav-menu ${isMobileMenuOpen ? "active" : ""}`}
        id="mobile-menu"
        ref={menuRef}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={handleSmoothScroll}
          >
            {link.text}
          </a>
        ))}
        <div className="mobile-socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={link.icon} alt={link.alt} className="social-img" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
