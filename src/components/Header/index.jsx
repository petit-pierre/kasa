import LogoKaza from "../../assets/LOGOheader.png";
import { NavLink } from "react-router-dom";
import "./header.css";
import "../../style/style.css";

function Header() {
  return (
    <div className="header">
      <img className="LogoKaza" src={LogoKaza} alt="Logo Kaza"></img>
      <nav className="liens">
        <NavLink to={`${process.env.PUBLIC_URL}/`} className="acceuil">
          Accueil
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/About`} className="about">
          A propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
