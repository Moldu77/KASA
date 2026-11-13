import { useState } from "react";
import slideLeft from "../assets/slide-left.svg";
import slideRight from "../assets/slide-right.svg";
import Logement from "../pages/logement";

export default function SlideShow({ images, title }) {
  const [indexImg, setIndexImg] = useState(0);
  

  return (
    <div className="caroussel">
      <button
        className="btn-slide left"
        onClick={() => {
          setIndexImg(indexImg === 0 ? images.length - 1 : indexImg - 1);
        }}
        aria-label="Image précédente"
      >
        <img src={slideLeft} alt="" />
      </button>
      <img src={images[indexImg]} alt={title} />
      <button
        className="btn-slide right"
        onClick={() => {
          setIndexImg(indexImg === images.length - 1 ? 0 : indexImg + 1);
        }}
        aria-label="Image suivante"
      >
        <img src={slideRight} alt="" />
      </button>
    </div>
    
  );
}
