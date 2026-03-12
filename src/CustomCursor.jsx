import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    document.body.style.cursor = "none";

    const moveCursor = (x, y) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseMove = (e) => moveCursor(e.clientX, e.clientY);

    const handleCustomUpdate = (e) => {
      if (e.detail) moveCursor(e.detail.x, e.detail.y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("updateCursor", handleCustomUpdate);

    const handleLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };
    const handleEnter = () => {
      if (cursor) cursor.style.opacity = "1";
    };

    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("updateCursor", handleCustomUpdate);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      document.body.style.cursor = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
        transform: "translate3d(-100px, -100px, 0)",
      }}
    ></div>,
    document.body,
  );
}

export default CustomCursor;
