import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import MyLogo from "./assets/imgs/logo-png.png";

import CustomCursor from "./CustomCursor";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Lightbox from "./pages/Lightbox";

const Preloader = ({ isLoaded }) => (
  <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
    <img src={MyLogo} alt="Loading..." className="preloader-logo" />
  </div>
);

function useFadeInOnView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

const FadeUp = ({ children }) => {
  const [ref, isVisible] = useFadeInOnView();
  return (
    <div ref={ref} className={`fade-up ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <CustomCursor />
          <Header />
          <main>
            <FadeUp>
              <Home />
            </FadeUp>
            <FadeUp>
              <About />
            </FadeUp>
            <FadeUp>
              <Skills />
            </FadeUp>
            <FadeUp>
              <Works />
            </FadeUp>
            <FadeUp>
              <Showcase />
            </FadeUp>
            <FadeUp>
              <Contact />
            </FadeUp>
          </main>
          <Footer />
          <Lightbox />
        </>
      )}
    </>
  );
}

export default App;
