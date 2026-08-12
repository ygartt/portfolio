import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="content-space">
        <h1 className="user-name">Yassine Gorma Elidrisi.</h1>
        <h2 className="user-position">FFRONTEND ENGINEER & VISUAL DESIGNER</h2>
        <p className="user-location">( Casablanca, Morocco )</p>
      </div>

      <div className="image-wrapper">
        <img src="/imgs/Home.webp" alt="Home Hero" className="home-img" />
      </div>
    </section>
  );
};

export default Home;
