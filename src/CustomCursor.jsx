import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const links = Array.from(
      document.querySelectorAll("a, button, .clickable")
    );

    document.body.style.cursor = "none";
    links.forEach((link) => (link.style.cursor = "none"));

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      document.body.style.cursor = "auto";
      links.forEach((link) => (link.style.cursor = "auto"));
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
        transition: "none",
        willChange: "transform",
        transform: "translate3d(-100px, -100px, 0)",
      }}
    ></div>,
    document.body
  );
}

export default CustomCursor;
