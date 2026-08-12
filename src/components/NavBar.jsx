import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/NavBar.css";

gsap.registerPlugin(ScrollTrigger);

const sectionsForNav = [
  { id: "about", name: "About", theme: "dark" },
  { id: "devworks", name: "Works", theme: "light" },
  { id: "desworks", name: "Showcase", theme: "dark" },
  { id: "contact", name: "Contact", theme: "light" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("About");
  const [navTheme, setNavTheme] = useState("dark");
  const menuRef = useRef(null);
  const cardRef = useRef(null);
  const isNavigating = useRef(false);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 1.2,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const checkState = () => {
      if (isNavigating.current) return;

      let activeName = "About";
      let activeTheme = "dark";

      for (let i = sectionsForNav.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionsForNav[i].id);
        if (el) {
          const checkEl = el.closest(".pin-spacer") || el;
          const rect = checkEl.getBoundingClientRect();

          if (rect.top <= window.innerHeight / 2.5) {
            activeName = sectionsForNav[i].name;
            activeTheme = sectionsForNav[i].theme;

            if (sectionsForNav[i].id === "desworks") {
              if (rect.top < -window.innerHeight * 0.8) {
                activeTheme = "light";
              }
            }
            break;
          }
        }
      }

      setCurrentSection((prev) => (prev !== activeName ? activeName : prev));
      setNavTheme((prev) => (prev !== activeTheme ? activeTheme : prev));
    };

    const interval = setInterval(checkState, 100);
    window.addEventListener("scroll", checkState);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", checkState);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            backgroundSize: "100%",
            backgroundPosition: "50% 50%",
          },
          {
            backgroundSize: "135%",
            backgroundPosition: "15% 50%",
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleNavigate = (e, targetId) => {
    e.preventDefault();

    const targetSection = sectionsForNav.find((s) => s.id === targetId);
    if (targetSection) {
      setCurrentSection(targetSection.name);
      setNavTheme(targetSection.theme);
    }

    setIsMenuOpen(false);
    isNavigating.current = true;

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const checkEl = targetElement.closest(".pin-spacer") || targetElement;
        checkEl.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
          isNavigating.current = false;
          ScrollTrigger.refresh();
        }, 1200);
      } else {
        isNavigating.current = false;
      }
    }, 400);
  };

  return (
    <>
      <nav
        className={`navbar-luxe ${
          !isMenuOpen && navTheme === "light" ? "light-theme" : ""
        }`}
      >
        <div className="logo-wrapper">
          <img src="/imgs/logo.png" alt="Logo" className="nav-logo" />
        </div>

        <div className="section-indicator">{currentSection}</div>

        <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="line line-top"></span>
          <span className="line line-bottom"></span>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuRef}>
        <div className="menu-track-screen">
          <div className="menu-content-wrapper">
            <div className="menu-social-wrapper">
              <a
                href="https://www.linkedin.com/in/yassine-gorma-elidrisi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/ygartt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.behance.net/ygartt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.819-5.564-5.676 0-3.162 2.14-5.694 5.348-5.694 3.332 0 5.24 2.21 5.24 5.92v.45h-7.859c.264 2.106 1.761 3.208 3.513 3.208 1.492 0 2.457-.611 2.946-1.503h1.477zm-4.764-5.556c-.035-1.282-1.071-2.274-2.45-2.274-1.353 0-2.404 1.015-2.607 2.274h5.057zm-14.962 4.556v-9h4.359c3.079 0 4.606 1.407 4.606 3.279 0 1.288-.696 2.378-1.921 2.844 1.504.28 2.378 1.499 2.378 3.013 0 1.954-1.637 3.864-5.111 3.864h-4.311zm2.348-7.234h1.726c1.378 0 2.261-.59 2.261-1.624 0-1.045-.883-1.579-2.261-1.579h-1.726v3.203zm0 5.433h2.008c1.644 0 2.518-.694 2.518-1.874 0-1.196-.874-1.821-2.518-1.821h-2.008v3.695z" />
                </svg>
              </a>
            </div>

            <h1 className="menu-intro-text text-white menu-flex-title">
              <span className="menu-intro-text text-white">yg</span>
              <span className="menu-contact-card" ref={cardRef}></span>
              <span className="menu-intro-text text-white">artt</span>
            </h1>

            <div className="menu-links-container">
              {sectionsForNav.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="menu-link-item"
                  onClick={(e) => handleNavigate(e, link.id)}
                >
                  <div className="menu-link-row">
                    <span className="menu-link-text">{link.name}</span>
                    <svg
                      className="menu-link-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="menu-link-line"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
