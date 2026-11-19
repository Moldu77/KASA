import logements from "../data/logements.json";
import SlideShow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import { useParams } from "react-router";
import Rating from "../components/Rating";
import { Navigate } from "react-router";

export default function Logement() {
  // Mettre en place un useState / useEffect pour les informations du logement

  const { id } = useParams();
  const logement = logements.find((logement) => {
    return logement.id === id;
  });

  if (logement === undefined) {
    return <Navigate to="/404" replace />;
  }
  return (
    <div className="logement">
      <SlideShow images={logement.pictures} title={logement.title} />
      <div className="title-host">
        <div className="title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-picture"
          />
        </div>
      </div>
      <div className="tags-rating">
        <div className="tags">
          {logement.tags.map((tag) => (
            <span className="tag-item" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Rating rating={logement.rating} />
      </div>
      <div className="description-equipements">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={
            <ul className="list-equipements">
              {logement.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
