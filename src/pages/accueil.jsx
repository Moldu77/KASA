import PictureAccueil from "../components/picture-accueil";
import logements from "../data/logements.json";
import CardLogement from "../components/card-logement";

export default function Accueil() {
  return (
    <div>
  <PictureAccueil />
  <div className="logements">
   { logements.map((logement) => (
      <CardLogement
        key={logement.id}
        image={logement.cover}
        alt={logement.title}
        title={logement.title}
        id={logement.id}
      />
    ))}
  </div>
  </div>
  )
}
