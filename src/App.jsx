import React, { useState, useEffect } from "react";
import "./App.css";

import MyLogo from "/imgs/logo-png.png";

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
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".fade-up");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <>
      <Preloader isLoaded={isLoaded} />
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
  );
}

export default App;
