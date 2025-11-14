import React from "react";
import contentImage from "../assets/imgs/contentYGARTT.png";

function Home() {
  return (
    <section
      className="home-section"
      id="home-section"
      data-section-name="Welcome to My world"
    >
      <div className="section-content fade-up">
        <img className="content-img" src={contentImage} alt="YG Art Main" />
      </div>
    </section>
  );
}

export default Home;
