import EnTete from "../../assets/IMG.png";
import "../../style/style.css";
import "../../style/Home.css";
import { Link } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function Home() {
  return (
    <div className="div">
      <img className="Banner" src={EnTete} alt="En tete" />

      <div className="card div">
        {Logements.map((Log) => (
          <Link
            to={"./Housing/" + Log.id}
            key={`${Log.id}`}
            className="acceuil"
          >
            <section
              key={`${Log.id}`}
              //onClick={(click) => {
              // console.log(Log.id);
              //}}
            >
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
