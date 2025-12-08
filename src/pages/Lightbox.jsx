import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import backIcon from "../assets/imgs/back.png";
import nextIcon from "../assets/imgs/next.png";
import outIcon from "../assets/imgs/out.png";

const portalRoot = document.body;

function Lightbox({ images, currentIndex, setCurrentIndex, isOpen, onClose }) {
  useEffect(() => {
    const mainAppRoot = document.getElementById("root");

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (mainAppRoot) {
        mainAppRoot.style.filter = "blur(7px)";
        mainAppRoot.style.pointerEvents = "none";
      }
    } else {
      document.body.style.overflow = "auto";
      if (mainAppRoot) {
        mainAppRoot.style.filter = "none";
        mainAppRoot.style.pointerEvents = "auto";
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      if (mainAppRoot) {
        mainAppRoot.style.filter = "none";
        mainAppRoot.style.pointerEvents = "auto";
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const showNext = () => setCurrentIndex((currentIndex + 1) % images.length);
  const showPrev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Button styles to hide system cursor
  const btnStyle = { cursor: "none", zIndex: 10001 };

  return ReactDOM.createPortal(
    <div
      className="lightbox active"
      onClick={handleBackgroundClick}
      // MUHIM: Zidna z-index w cursor: none hna
      style={{ cursor: "none", zIndex: 10000 }}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Showcase Image ${currentIndex + 1}`}
          className="lightbox-img"
        />
        <div className="lightbox-controls">
          <button
            className="lightbox-btn prev"
            onClick={showPrev}
            style={btnStyle}
          >
            <img src={backIcon} alt="Previous" />
          </button>
          <button
            className="lightbox-btn next"
            onClick={showNext}
            style={btnStyle}
          >
            <img src={nextIcon} alt="Next" />
          </button>
          <button
            className="lightbox-btn close"
            onClick={onClose}
            style={btnStyle}
          >
            <img src={outIcon} alt="Close" />
          </button>
        </div>
      </div>
    </div>,
    portalRoot
  );
}

export default Lightbox;
