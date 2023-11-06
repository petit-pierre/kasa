import "../../style/style.css";
import "../../style/slider.css";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";
import { useState } from "react";

function Slider(house) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousPicture = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? house.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextPicture = () => {
    const isLastSlide = currentIndex === house.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="sliderContainer">
      <img
        className="imageSlider"
        src={house.pictures[currentIndex]}
        alt="slider"
      ></img>
      {house.pictures.length > 1 ? (
        <div>
          <img
            className="arrowLeft"
            src={ArrowLeft}
            alt="fleche vers la gauche"
            onClick={previousPicture}
          ></img>
          <img
            className="arrowRight"
            src={ArrowRight}
            alt="fleche vers la droite"
            onClick={nextPicture}
          ></img>
          <p className="counter">
            {currentIndex + 1}/{house.pictures.length}
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Slider;
