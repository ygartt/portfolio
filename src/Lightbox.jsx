import React, { useEffect } from "react";

function Lightbox() {
  useEffect(() => {
    // LIGHTBOX GALLERY LOGIC
    const items = document.querySelectorAll(".showcase-item"); // Query items here
    const lightbox = document.getElementById("lightbox");

    let allImages = [];
    let currentIndex = 0;
    let lightboxImg, lightboxCloseBtn, lightboxPrevBtn, lightboxNextBtn;

    // Only proceed if lightbox element exists
    if (lightbox) {
      lightboxImg = lightbox.querySelector(".lightbox-img");
      lightboxCloseBtn = lightbox.querySelector(".lightbox-btn.close");
      lightboxPrevBtn = lightbox.querySelector(".lightbox-btn.prev");
      lightboxNextBtn = lightbox.querySelector(".lightbox-btn.next");

      // Ensure child elements exist before adding listeners
      if (
        !lightboxImg ||
        !lightboxCloseBtn ||
        !lightboxPrevBtn ||
        !lightboxNextBtn
      ) {
        console.error("Lightbox elements not found!");
        return; // Stop execution if elements are missing
      }

      // Populate images only if items exist
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
        if (allImages.length === 0) return; // Don't open if no images
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

      // Add item listeners if items exist
      const itemClickListeners = [];
      if (items.length > 0) {
        items.forEach((item, index) => {
          const handler = () => openLightbox(index);
          item.addEventListener("click", handler);
          itemClickListeners.push({ item, handler }); // Store for removal
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

      // Cleanup function
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
        // Ensure body overflow is reset if component unmounts while lightbox is open
        document.body.style.overflow = "auto";
      };
    }
  }, []); // Run once on mount

  return (
    <div className="lightbox" id="lightbox">
      <div className="lightbox-content">
        <img src="" alt="Showcase Full View" className="lightbox-img" />
        <div className="lightbox-controls">
          <button className="lightbox-btn prev">
            <img src="/imgs/back.png" alt="Previous" />
          </button>
          <button className="lightbox-btn next">
            <img src="/imgs/next.png" alt="Next" />
          </button>
          <button className="lightbox-btn close">
            <img src="/imgs/out.png" alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
