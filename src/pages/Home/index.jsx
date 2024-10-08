import EnTete from "../../assets/IMG.png";
import "../../style/style.css";
import "./home.css";
import { Link } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function Home() {
  return (
    <div className="div">
      <div className="BannerDiv">
        <img className="Banner" src={EnTete} alt="En tete" />
        <p className="BannerText">Chez vous, partout et ailleurs</p>
      </div>

      <div className="card div">
        {Logements.map((Log) => (
          <Link
            to={process.env.PUBLIC_URL + "/Housing/" + Log.id}
            key={`${Log.id}`}
            className="acceuil"
          >
            <section key={`${Log.id}`}>
              <img className="pictureCard" src={Log.cover} alt="Logement" />
              <div className="gradient div"></div>
              <p>{Log.title}</p>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
