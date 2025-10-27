import React, { useState, useEffect } from "react";
import "./App.css";

import MyLogo from "./assets/imgs/logo-png.png";

import CustomCursor from "./CustomCursor";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Showcase from "./Showcase";
import Contact from "./Contact";
import Footer from "./Footer";
import Lightbox from "./Lightbox";

const Preloader = ({ isLoaded }) => {
  return (
    <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
      <img src={MyLogo} alt="Loading..." className="preloader-logo" />
    </div>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".fade-up");
    if (!targets.length) return;

    const options = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach((target) => observer.observe(target));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isLoaded]);

  return (
    <>
      <Preloader isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <CustomCursor />
          <Header />
          <main>
            <Home />
            <About />
            <Skills />
            <Works />
            <Showcase />
            <Contact />
          </main>
          <Footer />
          <Lightbox />
        </>
      )}
    </>
  );
}

export default App;
