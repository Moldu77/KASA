import Banner from "../components/Banner";
import logements from "../data/logements.json";
import CardLogement from "../components/CardLogement";
import ImageAccueil from "../assets/Image-accueil.webp";

export default function Accueil() {
  return (
    <div>
      <Banner
        image={ImageAccueil}
        alt="Paysage montagneux"
        title="Chez vous, partout et ailleurs"
      />
      <div className="logements">
        {logements.map((logement) => (
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
  );
}
