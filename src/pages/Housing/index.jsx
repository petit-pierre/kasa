import { redirect } from "react-router-dom";
import Slider from "../../components/Slider";
import "../../style/style.css";
import "../../style/Housing.css";
import { useParams } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function Housing() {
  const { houseNumber } = useParams();
  const house = Logements.find((Logements) => Logements.id === houseNumber);
  return <div className="slider">{Slider(house)}</div>;
}

export default Housing;
