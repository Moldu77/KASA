import StarRatingGrey from "../assets/star-rating.png";
import StarRatingRed from "../assets/star-rating-red.png";

export default function Rating({ rating }) {
  const number = Number(rating);
  const arrRating = [1, 2, 3, 4, 5];
  return (
    <div className="rates">
      {arrRating.map((note) => (
        <img
          src={note <= number ? StarRatingRed : StarRatingGrey}
          key={note}
          alt=""
        />
      ))}
    </div>
  );
}
