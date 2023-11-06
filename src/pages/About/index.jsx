import EnTete from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../../style/style.css";
import "../../style/about.css";
import Collapse from "../../components/Collapse";
let CollapseAbout = require(`../../data/collapse-about.json`);

function About() {
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
