import { useState } from "react";
import slideLeft from "../assets/slide-left.svg";
import slideRight from "../assets/slide-right.svg";

export default function SlideShow({ images, title }) {
  const [indexImg, setIndexImg] = useState(0);

  return (
    <div className="caroussel">
      <img src={images[indexImg]} alt={title} />
      {images.length > 1 && (
        <>
          <button
            className="btn-slide left"
            onClick={() => {
              setIndexImg(indexImg === 0 ? images.length - 1 : indexImg - 1);
            }}
            aria-label="Image précédente"
          >
            <img src={slideLeft} alt="" />
          </button>

          <p className="count-picture">
            {indexImg + 1}/{images.length}
          </p>

          <button
            className="btn-slide right"
            onClick={() => {
              setIndexImg(indexImg === images.length - 1 ? 0 : indexImg + 1);
            }}
            aria-label="Image suivante"
          >
            <img src={slideRight} alt="" />
          </button>
        </>
      )}
    </div>
  );
}
