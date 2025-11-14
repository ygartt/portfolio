import React, { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const links = document.querySelectorAll("[href]");

    let mouseMoveHandler;
    let mouseLeaveHandler;
    let mouseEnterHandler;

    if (cursor) {
      mouseMoveHandler = (e) => {
        cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      };
      mouseLeaveHandler = () => {
        cursor.style.opacity = "0";
      };
      mouseEnterHandler = () => {
        cursor.style.opacity = "1";
      };

      window.addEventListener("mousemove", mouseMoveHandler);
      document.documentElement.addEventListener(
        "mouseleave",
        mouseLeaveHandler
      );
      document.documentElement.addEventListener(
        "mouseenter",
        mouseEnterHandler
      );

      links.forEach((link) => {
        link.style.cursor = "none";
      });
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
      links.forEach((link) => {
        link.style.cursor = "auto";
      });
    }

    return () => {
      if (cursor && mouseMoveHandler) {
        window.removeEventListener("mousemove", mouseMoveHandler);
      }
      if (mouseLeaveHandler) {
        document.documentElement.removeEventListener(
          "mouseleave",
          mouseLeaveHandler
        );
      }
      if (mouseEnterHandler) {
        document.documentElement.removeEventListener(
          "mouseenter",
          mouseEnterHandler
        );
      }
      document.body.style.cursor = "auto";
      links.forEach((link) => {
        link.style.cursor = "auto";
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
}

export default CustomCursor;
