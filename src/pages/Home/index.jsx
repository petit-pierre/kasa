import EnTete from "../../assets/IMG.png";
import "../../utils/Style/style.css";
import "../../utils/Style/Home.css";
import { Link } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function Home() {
  return (
    <div>
      <img className="Banner" src={EnTete} alt="En tete" />
      <div className="card">
        {Logements.map((Log) => (
          <section
            key={`${Log.id}`}
            onClick={(click) => {
              console.log(Log.id);
            }}
          >
            <img className="pictureCard" src={Log.cover} alt="Logement" />
            <div className="gradient"></div>
            <p>{Log.title}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;
