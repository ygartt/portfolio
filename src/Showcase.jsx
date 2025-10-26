import React, { useEffect } from "react";

function Showcase() {
  useEffect(() => {
    // PAGINATION LOGIC
    const itemsPerPage = 6;
    const grid = document.querySelector(".showcase-grid");
    const controls = document.querySelector(".pagination-controls");
    const items = grid ? grid.querySelectorAll(".showcase-item") : [];

    let currentPage = 1; // Keep track of current page
    let paginationPrevBtn, paginationNextBtn, numberBtnContainer; // Declare buttons

    if (grid && items.length > 0 && controls) {
      const pageCount = Math.ceil(items.length / itemsPerPage);

      paginationPrevBtn = document.createElement("button");
      paginationPrevBtn.classList.add("nav-btn", "prev");
      paginationPrevBtn.innerHTML = `<img src="/imgs/back.png" alt="Back">`;
      if (document.querySelector(".custom-cursor"))
        paginationPrevBtn.style.cursor = "none";

      paginationNextBtn = document.createElement("button");
      paginationNextBtn.classList.add("nav-btn", "next");
      paginationNextBtn.innerHTML = `<img src="/imgs/next.png" alt="Next">`;
      if (document.querySelector(".custom-cursor"))
        paginationNextBtn.style.cursor = "none";

      numberBtnContainer = document.createElement("div");
      numberBtnContainer.classList.add("pagination-numbers");

      // Clear previous controls before adding new ones
      controls.innerHTML = "";
      controls.appendChild(paginationPrevBtn);
      controls.appendChild(numberBtnContainer);
      controls.appendChild(paginationNextBtn);

      const showPage = (page) => {
        currentPage = page; // Update current page tracker
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
        numberBtnContainer.innerHTML = ""; // Clear number buttons before setup
        if (pageCount <= 1) {
          controls.style.display = "none";
          return;
        }
        controls.style.display = "flex"; // Ensure controls are visible if > 1 page
        for (let i = 1; i <= pageCount; i++) {
          const btn = document.createElement("button");
          btn.classList.add("pagination-btn");
          btn.innerText = i;
          if (i === 1) btn.classList.add("active");
          btn.addEventListener("click", () => {
            showPage(i); // Pass 'i' directly
          });
          if (document.querySelector(".custom-cursor"))
            btn.style.cursor = "none";
          numberBtnContainer.appendChild(btn);
        }
      };

      const prevBtnClickHandler = () => {
        if (currentPage > 1) {
          showPage(currentPage - 1); // Update directly
        }
      };
      const nextBtnClickHandler = () => {
        if (currentPage < pageCount) {
          showPage(currentPage + 1); // Update directly
        }
      };

      paginationPrevBtn.addEventListener("click", prevBtnClickHandler);
      paginationNextBtn.addEventListener("click", nextBtnClickHandler);

      setupPagination();
      showPage(currentPage); // Show initial page

      // Cleanup pagination listeners
      return () => {
        paginationPrevBtn.removeEventListener("click", prevBtnClickHandler);
        paginationNextBtn.removeEventListener("click", nextBtnClickHandler);
        // Remove number button listeners (optional, but good practice)
        numberBtnContainer
          .querySelectorAll(".pagination-btn")
          .forEach((btn) => {
            // Need to store/retrieve the handler to remove it properly
          });
      };
    } else if (controls) {
      controls.style.display = "none"; // Hide controls if no items
    }
  }, []); // Run pagination logic once

  useEffect(() => {
    // DYNAMIC TEXT UPDATE LOGIC
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

    updateShowcaseText(); // Initial check
    mobileMediaQuery.addEventListener("change", updateShowcaseText);

    return () =>
      mobileMediaQuery.removeEventListener("change", updateShowcaseText);
  }, []);

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
        {/* Repeat this block for each image (15 times) */}
        <div className="showcase-item">
          <img src="/imgs/showcase/1.jpg" alt="Showcase Image 1" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/2.jpg" alt="Showcase Image 2" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/3.jpg" alt="Showcase Image 3" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/4.jpg" alt="Showcase Image 4" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/5.jpg" alt="Showcase Image 5" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/6.jpg" alt="Showcase Image 6" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/7.jpg" alt="Showcase Image 7" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/8.jpg" alt="Showcase Image 8" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/9.jpg" alt="Showcase Image 9" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/10.jpg" alt="Showcase Image 10" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/11.jpg" alt="Showcase Image 11" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/12.jpg" alt="Showcase Image 12" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/13.jpg" alt="Showcase Image 13" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/14.jpg" alt="Showcase Image 14" />
        </div>
        <div className="showcase-item">
          <img src="/imgs/showcase/15.jpg" alt="Showcase Image 15" />
        </div>
        {/* End repeat */}
      </div>

      {/* Pagination Controls will be populated by JS */}
      <div className="pagination-controls"></div>
    </section>
  );
}

export default Showcase;
