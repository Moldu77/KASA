import { NavLink } from "react-router";

export default function CardLogement({image, alt, title,id}) {
    return (
        <NavLink to={`/logement/${id}`} className="card-logement-link">
        <div className="card-logement">
            <img src={image} alt={alt} />
            <p>{title}</p>
        </div>
        </NavLink>
    )
}