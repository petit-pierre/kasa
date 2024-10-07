import Slider from "../../components/Slider";
import Stars from "../../components/Stars";
import Tags from "../../components/Tags";
import Host from "../../components/Host";
import { Navigate } from "react-router-dom";
import "../../style/style.css";
import "./housing.css";
import Collapse from "../../components/Collapse";
import { useParams } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function Housing() {
  const { houseNumber } = useParams();
  const house = Logements.find((Logements) => Logements.id === houseNumber);
  if (!house) {
    return <Navigate to={process.env.PUBLIC_URL + "/404/"} replace={true} />;
  }
  return (
    <div>
      <div className="slider">
        <div className="slider">
          <Slider house={house} />
        </div>
      </div>
      <section className="housing">
        <div className="leftSide">
          <p className="titleHousing">{house.title}</p>
          <p className="locationHousing">{house.location}</p>
          <Tags house={house} />
        </div>
        <div className="rightSide">
          <Host house={house} />
          <div className="stars">
            <Stars house={house} />
          </div>
        </div>
      </section>
      <section className="collapseSection">
        <div className="collapseDescription">
          <Collapse name="Description" content={house.description} />
        </div>
        <div className="collapse">
          <Collapse
            name="Équipements"
            content={house.equipments.map((equip) => (
              <span key={equip}>
                {equip}
                <br></br>
              </span>
            ))}
          />
        </div>
      </section>
    </div>
  );
}

export default Housing;
