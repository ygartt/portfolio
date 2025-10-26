import React from "react";
import "./App.css";

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

function App() {
  return (
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
  );
}

export default App;
