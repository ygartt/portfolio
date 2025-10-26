import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const contactHeaderP = document.getElementById("contact-header-p");
    const textUpdateConfig = {
      "contact-header-p": {
        desktop: `I'm always looking to collaborate with people who value creativity and purpose, whether it's building a strong brand, designing clean interfaces, or developing digital experiences that feel alive, I love turning simple ideas into something real and inspiring, if you have a project or a vision in mind, let’s bring it to life together.`,
        mobile: `Passionate about creating inspiring digital experiences from simple ideas , If you have a project or vision, let’s bring it to life together ...`,
      },
    };
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    function updateContactText() {
      const isMobile = mobileMediaQuery.matches;
      if (contactHeaderP) {
        if (!contactHeaderP.dataset.desktopText) {
          contactHeaderP.dataset.desktopText = contactHeaderP.textContent;
        }
        contactHeaderP.textContent = isMobile
          ? textUpdateConfig["contact-header-p"].mobile
          : contactHeaderP.dataset.desktopText;
      }
    }

    updateContactText();
    mobileMediaQuery.addEventListener("change", updateContactText);

    return () =>
      mobileMediaQuery.removeEventListener("change", updateContactText);
  }, []);

  return (
    <section
      className="contact fade-up"
      id="contact"
      data-section-name="Let’s build your vision"
    >
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p id="contact-header-p">
          I'm always looking to collaborate with people who value creativity and
          purpose, whether it's building a strong brand, designing clean
          interfaces, or developing digital experiences that feel alive, I love
          turning simple ideas into something real and inspiring, if you have a
          project or a vision in mind, let’s bring it to life together.
        </p>
      </div>

      <div className="contact-email">
        <a href="mailto:yassine.gorma.elidrisi@gmail.com">
          yassine.gorma.elidrisi@gmail.com
        </a>
        <img src="/imgs/link.png" alt="Arrow Icon" className="email-icon" />
      </div>

      <div className="contact-image-card">
        <img src="/imgs/contact.png" alt="Contact Abstract" /> {/* Added alt */}
      </div>
    </section>
  );
}

export default Contact;
