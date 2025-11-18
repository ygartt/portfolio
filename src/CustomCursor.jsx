import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const links = Array.from(document.querySelectorAll("[href]"));

    document.body.style.cursor = "none";
    links.forEach((link) => (link.style.cursor = "none"));

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
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

  return <div ref={cursorRef} className="custom-cursor"></div>;
}

export default CustomCursor;
