import LogoDesktop from "../assets/LOGO-KASA.svg";
import LogoMobile from "../assets/LOGO-KASA-MOBILE.svg";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <picture>
        <source media="(max-width: 768px)" srcSet={LogoMobile} />
        <img src={LogoDesktop} alt="Logo Kasa" />
      </picture>
      <nav className="nav">
        <NavLink to="/">Accueil</NavLink>

        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  );
}
