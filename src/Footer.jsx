import React from "react";

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-container fade-up">
        <div className="footer-left">
          <h3>YGARTT / YASSINE GORMA</h3>
          <p>
            A creative soul driven by passion and curiosity, a programmer and
            graphic designer who finds beauty in both logic and art, crafting
            experiences that connect technology with emotion.
          </p>
        </div>

        <div className="footer-center">
          <h3>Explore This Page</h3>
          <ul>
            <li>
              <a href="#about">
                <i className="fa-solid fa-arrow-up-right-from-square button-icon"></i>
                <span style={{ color: "transparent" }}>h</span> About – A
                glimpse into who I am.
              </a>
            </li>
            <li>
              <a href="#works">
                <i className="fa-solid fa-arrow-up-right-from-square button-icon"></i>
                <span style={{ color: "transparent" }}>h</span> Projects – A
                look at my work.
              </a>
            </li>
            <li>
              <a href="#showcase">
                <i className="fa-solid fa-arrow-up-right-from-square button-icon"></i>
                <span style={{ color: "transparent" }}>h</span> Gallery – My
                creative work.
              </a>
            </li>
          </ul>
        </div>

        <div className="footerroightandimg">
          <div className="footer-right">
            <h3>Let's Start a Conversation</h3>
            <ul className="footer-icons">
              <li>
                <a href="mailto:yassine.gorma.elidrisi@gmail.com">
                  <img
                    src="/imgs/icons/Mail.png"
                    alt="Email"
                    className="footer-icon-img"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yassine-gorma-elidrisi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/imgs/icons/LinkedIn.png"
                    alt="LinkedIn"
                    className="footer-icon-img"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yg.artt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/imgs/icons/instagram.png"
                    alt="Instagram"
                    className="footer-icon-img"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://pin.it/1HPIWQWik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <img
                    src="/imgs/icons/Pinterest.png"
                    alt="Pinterest"
                    className="social-img"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-image">
            <img src="/imgs/line.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
