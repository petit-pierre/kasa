import "../../style/style.css";
import "./404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="global">
      <h1 className="bigTitle">404</h1>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="./" className="acceuil">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error404;
