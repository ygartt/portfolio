import React, { useEffect } from "react";
import backIcon from "./assets/imgs/back.png";
import nextIcon from "./assets/imgs/next.png";
import outIcon from "./assets/imgs/out.png";

function Lightbox() {
  useEffect(() => {
    const items = document.querySelectorAll(".showcase-item");
    const lightbox = document.getElementById("lightbox");

    let allImages = [];
    let currentIndex = 0;
    let lightboxImg, lightboxCloseBtn, lightboxPrevBtn, lightboxNextBtn;

    if (lightbox) {
      lightboxImg = lightbox.querySelector(".lightbox-img");
      lightboxCloseBtn = lightbox.querySelector(".lightbox-btn.close");
      lightboxPrevBtn = lightbox.querySelector(".lightbox-btn.prev");
      lightboxNextBtn = lightbox.querySelector(".lightbox-btn.next");

      if (
        !lightboxImg ||
        !lightboxCloseBtn ||
        !lightboxPrevBtn ||
        !lightboxNextBtn
      ) {
        console.error("Lightbox elements not found!");
        return;
      }

      if (items.length > 0) {
        items.forEach((item) => allImages.push(item.querySelector("img").src));
      }

      const showImage = (index) => {
        if (index >= 0 && index < allImages.length) {
          lightboxImg.src = allImages[index];
          currentIndex = index;
        }
      };

      const openLightbox = (index) => {
        if (allImages.length === 0) return;
        showImage(index);
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      };

      const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      };

      const showNextImage = () => {
        if (allImages.length === 0) return;
        showImage((currentIndex + 1) % allImages.length);
      };

      const showPrevImage = () => {
        if (allImages.length === 0) return;
        showImage((currentIndex - 1 + allImages.length) % allImages.length);
      };

      const itemClickListeners = [];
      if (items.length > 0) {
        items.forEach((item, index) => {
          const handler = () => openLightbox(index);
          item.addEventListener("click", handler);
          itemClickListeners.push({ item, handler });
        });
      }

      const closeBtnHandler = () => closeLightbox();
      const nextBtnHandler = () => showNextImage();
      const prevBtnHandler = () => showPrevImage();
      const lightboxBgHandler = (e) => {
        if (e.target === lightbox) closeLightbox();
      };

      lightboxCloseBtn.addEventListener("click", closeBtnHandler);
      lightboxNextBtn.addEventListener("click", nextBtnHandler);
      lightboxPrevBtn.addEventListener("click", prevBtnHandler);
      lightbox.addEventListener("click", lightboxBgHandler);

      return () => {
        itemClickListeners.forEach(({ item, handler }) => {
          item.removeEventListener("click", handler);
        });
        if (lightboxCloseBtn)
          lightboxCloseBtn.removeEventListener("click", closeBtnHandler);
        if (lightboxNextBtn)
          lightboxNextBtn.removeEventListener("click", nextBtnHandler);
        if (lightboxPrevBtn)
          lightboxPrevBtn.removeEventListener("click", prevBtnHandler);
        if (lightbox) lightbox.removeEventListener("click", lightboxBgHandler);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  return (
    <div className="lightbox" id="lightbox">
      <div className="lightbox-content">
        <img src="" alt="Showcase Full View" className="lightbox-img" />
        <div className="lightbox-controls">
          <button className="lightbox-btn prev">
            <img src={backIcon} alt="Previous" />
          </button>
          <button className="lightbox-btn next">
            <img src={nextIcon} alt="Next" />
          </button>
          <button className="lightbox-btn close">
            <img src={outIcon} alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
