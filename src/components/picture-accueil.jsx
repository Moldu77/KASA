import ImageAccueil from "../assets/image-accueil.png";

export default function PictureAccueil(){
    return(
          <div className="picture-header">
        <img src={ImageAccueil} alt="Paysage montagneux" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
}