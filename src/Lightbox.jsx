import backIcon from "./assets/imgs/back.png";
import nextIcon from "./assets/imgs/next.png";
import outIcon from "./assets/imgs/out.png";

function Lightbox({ images, currentIndex, setCurrentIndex, isOpen, onClose }) {
  if (!isOpen) return null;

  const showNext = () => setCurrentIndex((currentIndex + 1) % images.length);

  const showPrev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="lightbox active" onClick={handleBackgroundClick}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Showcase Image ${currentIndex + 1}`}
          className="lightbox-img"
        />
        <div className="lightbox-controls">
          <button className="lightbox-btn prev" onClick={showPrev}>
            <img src={backIcon} alt="Previous" />
          </button>
          <button className="lightbox-btn next" onClick={showNext}>
            <img src={nextIcon} alt="Next" />
          </button>
          <button className="lightbox-btn close" onClick={onClose}>
            <img src={outIcon} alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
