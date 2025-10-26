import React, { useEffect } from "react";
import showcaseImg1 from "./assets/imgs/showcase/1.jpg";
import showcaseImg2 from "./assets/imgs/showcase/2.jpg";
import showcaseImg3 from "./assets/imgs/showcase/3.jpg";
import showcaseImg4 from "./assets/imgs/showcase/4.jpg";
import showcaseImg5 from "./assets/imgs/showcase/5.jpg";
import showcaseImg6 from "./assets/imgs/showcase/6.jpg";
import showcaseImg7 from "./assets/imgs/showcase/7.jpg";
import showcaseImg8 from "./assets/imgs/showcase/8.jpg";
import showcaseImg9 from "./assets/imgs/showcase/9.jpg";
import showcaseImg10 from "./assets/imgs/showcase/10.jpg";
import showcaseImg11 from "./assets/imgs/showcase/11.jpg";
import showcaseImg12 from "./assets/imgs/showcase/12.jpg";
import showcaseImg13 from "./assets/imgs/showcase/13.jpg";
import showcaseImg14 from "./assets/imgs/showcase/14.jpg";
import showcaseImg15 from "./assets/imgs/showcase/15.jpg";

import backIcon from "./assets/imgs/back.png";
import nextIcon from "./assets/imgs/next.png";

function Showcase() {
  useEffect(() => {
    const itemsPerPage = 6;
    const grid = document.querySelector(".showcase-grid");
    const controls = document.querySelector(".pagination-controls");
    const items = grid ? grid.querySelectorAll(".showcase-item") : [];

    let currentPage = 1;
    let paginationPrevBtn, paginationNextBtn, numberBtnContainer;

    if (grid && items.length > 0 && controls) {
      const pageCount = Math.ceil(items.length / itemsPerPage);

      paginationPrevBtn = document.createElement("button");
      paginationPrevBtn.classList.add("nav-btn", "prev");

      const prevImg = document.createElement("img");
      prevImg.src = backIcon;
      prevImg.alt = "Back";
      paginationPrevBtn.appendChild(prevImg);
      if (document.querySelector(".custom-cursor"))
        paginationPrevBtn.style.cursor = "none";

      paginationNextBtn = document.createElement("button");
      paginationNextBtn.classList.add("nav-btn", "next");

      const nextImg = document.createElement("img");
      nextImg.src = nextIcon;
      nextImg.alt = "Next";
      paginationNextBtn.appendChild(nextImg);
      if (document.querySelector(".custom-cursor"))
        paginationNextBtn.style.cursor = "none";

      numberBtnContainer = document.createElement("div");
      numberBtnContainer.classList.add("pagination-numbers");

      controls.innerHTML = "";
      controls.appendChild(paginationPrevBtn);
      controls.appendChild(numberBtnContainer);
      controls.appendChild(paginationNextBtn);

      const showPage = (page) => {
        currentPage = page;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item) => (item.style.display = "none"));
        for (let i = startIndex; i < endIndex && i < items.length; i++) {
          items[i].style.display = "block";
        }
        updateActiveButton(page);
        updateNavButtons(page);
      };

      const updateActiveButton = (page) => {
        numberBtnContainer
          .querySelectorAll(".pagination-btn")
          .forEach((btn) => {
            btn.classList.remove("active");
            if (parseInt(btn.innerText) === page) btn.classList.add("active");
          });
      };

      const updateNavButtons = (page) => {
        paginationPrevBtn.disabled = page === 1;
        paginationNextBtn.disabled = page === pageCount;
      };

      const setupPagination = () => {
        numberBtnContainer.innerHTML = "";
        if (pageCount <= 1) {
          controls.style.display = "none";
          return;
        }
        controls.style.display = "flex";
        for (let i = 1; i <= pageCount; i++) {
          const btn = document.createElement("button");
          btn.classList.add("pagination-btn");
          btn.innerText = i;
          if (i === 1) btn.classList.add("active");
          btn.addEventListener("click", () => {
            showPage(i);
          });
          if (document.querySelector(".custom-cursor"))
            btn.style.cursor = "none";
          numberBtnContainer.appendChild(btn);
        }
      };

      const prevBtnClickHandler = () => {
        if (currentPage > 1) {
          showPage(currentPage - 1);
        }
      };
      const nextBtnClickHandler = () => {
        if (currentPage < pageCount) {
          showPage(currentPage + 1);
        }
      };

      paginationPrevBtn.addEventListener("click", prevBtnClickHandler);
      paginationNextBtn.addEventListener("click", nextBtnClickHandler);

      setupPagination();
      showPage(currentPage);

      return () => {
        if (paginationPrevBtn)
          paginationPrevBtn.removeEventListener("click", prevBtnClickHandler);
        if (paginationNextBtn)
          paginationNextBtn.removeEventListener("click", nextBtnClickHandler);
        if (numberBtnContainer) {
          numberBtnContainer
            .querySelectorAll(".pagination-btn")
            .forEach(() => {});
        }
      };
    } else if (controls) {
      controls.style.display = "none";
    }
  }, []);

  useEffect(() => {
    const showcaseHeaderP = document.getElementById("showcase-header-p");
    const textUpdateConfig = {
      "showcase-header-p": {
        desktop: `This gallery offers an immersive glimpse into my creative universe as a visual designer where imagination meets experimentation and visual storytelling blending artistic photo manipulations branding concepts and digital compositions ... Each creation reflects my passion for exploring form color and emotion to craft visuals that capture attention and evoke connection.`,
        mobile: `A gallery glimpse into my creative visual design, blending artistic manipulation, branding concepts, and digital compositions reflecting my passion.`,
      },
    };
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    function updateShowcaseText() {
      const isMobile = mobileMediaQuery.matches;
      if (showcaseHeaderP) {
        if (!showcaseHeaderP.dataset.desktopText) {
          showcaseHeaderP.dataset.desktopText = showcaseHeaderP.textContent;
        }
        showcaseHeaderP.textContent = isMobile
          ? textUpdateConfig["showcase-header-p"].mobile
          : showcaseHeaderP.dataset.desktopText;
      }
    }

    updateShowcaseText();
    mobileMediaQuery.addEventListener("change", updateShowcaseText);

    return () =>
      mobileMediaQuery.removeEventListener("change", updateShowcaseText);
  }, []);

  const showcaseImages = [
    showcaseImg1,
    showcaseImg2,
    showcaseImg3,
    showcaseImg4,
    showcaseImg5,
    showcaseImg6,
    showcaseImg7,
    showcaseImg8,
    showcaseImg9,
    showcaseImg10,
    showcaseImg11,
    showcaseImg12,
    showcaseImg13,
    showcaseImg14,
    showcaseImg15,
  ];

  return (
    <section
      className="showcase"
      id="showcase"
      data-section-name="A Gallery of My Creative Work"
    >
      <div className="showcase-header fade-up">
        <h2>My Creative Gallery</h2>
        <p id="showcase-header-p">
          This gallery offers an immersive glimpse into my creative universe as
          a visual designer where imagination meets experimentation and visual
          storytelling blending artistic photo manipulations branding concepts
          and digital compositions ... Each creation reflects my passion for
          exploring form color and emotion to craft visuals that capture
          attention and evoke connection.
        </p>
      </div>

      <div className="showcase-grid">
        {showcaseImages.map((imgSrc, index) => (
          <div className="showcase-item" key={index}>
            <img src={imgSrc} alt={`Showcase Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="pagination-controls"></div>
    </section>
  );
}

export default Showcase;
