import EnTete from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../../utils/Style/style.css";
import "../../utils/Style/about.css";
import Collapse from "../../components/Collapse";
let CollapseAbout = require(`../../data/collapse-about.json`);

function About() {
  let name = "Fiabilité";
  let content =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  return (
    <div>
      <img className="Banner" src={EnTete} alt="En tete" />
      {Collapse(CollapseAbout[0].name, CollapseAbout[0].content)}
      {Collapse(CollapseAbout[1].name, CollapseAbout[1].content)}
      {Collapse(CollapseAbout[2].name, CollapseAbout[2].content)}
      {Collapse(CollapseAbout[3].name, CollapseAbout[3].content)}
    </div>
  );
}

export default About;
