import { Link } from "react-router";

export default function Page404() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}