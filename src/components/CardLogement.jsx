import { Link } from "react-router";

export default function CardLogement({ image, alt, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="card-logement-link">
      <div className="card-logement">
        <img src={image} alt={alt} />
        <div className="card-logement__dark-bg">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
