import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import DevWorks from "./pages/DevWorks";
import DesWorks from "./pages/DesWorks";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  useEffect(() => {
    if (!isIntroDone) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isIntroDone]);

  return (
    <>
      {!isIntroDone && <Intro onComplete={() => setIsIntroDone(true)} />}

      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <div className="app-container">
          <NavBar />
          <main>
            <Home />
            <About />
            <DevWorks />
            <DesWorks />
            <Contact />
          </main>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
