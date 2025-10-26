import React from "react";
import mailIcon from "./assets/imgs/icons/Mail.png";
import linkedInIcon from "./assets/imgs/icons/LinkedIn.png";
import instagramIcon from "./assets/imgs/icons/instagram.png";
import pinterestIcon from "./assets/imgs/icons/Pinterest.png";
import lineImage from "./assets/imgs/line.png";

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
                  <img src={mailIcon} alt="Email" className="footer-icon-img" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yassine-gorma-elidrisi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedInIcon}
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
                    src={instagramIcon}
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
                >
                  <img
                    src={pinterestIcon}
                    alt="Pinterest"
                    className="footer-icon-img"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-image">
            <img src={lineImage} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
