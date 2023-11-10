import EnTete from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../../style/style.css";
import "../../style/about.css";
import Collapse from "../../components/Collapse";
let CollapseAbout = require(`../../data/collapse-about.json`);

function About() {
  return (
    <div>
      <img className="BannerAbout Banner" src={EnTete} alt="En tete" />
      {CollapseAbout.map((forCollapse) => {
        return (
          <Collapse
            key={`${forCollapse.id}`}
            name={forCollapse.name}
            content={forCollapse.content}
          />
        );
      })}
    </div>
  );
}

export default About;
