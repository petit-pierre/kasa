import StarActive from "../../assets/star-active.png";
import StarInactive from "../../assets/star-inactive.png";
import "../../style/style.css";
import "../../pages/Housing/housing.css";

function Stars({ house }) {
  return (
    <div>
      <img
        className="star"
        src={house.rating < 1 ? StarInactive : StarActive}
        alt="logo etoile"
      />
      <img
        className="star"
        src={house.rating < 2 ? StarInactive : StarActive}
        alt="logo etoile"
      />
      <img
        className="star"
        src={house.rating < 3 ? StarInactive : StarActive}
        alt="logo etoile"
      />
      <img
        className="star"
        src={house.rating < 4 ? StarInactive : StarActive}
        alt="logo etoile"
      />
      <img
        className="star"
        src={house.rating < 5 ? StarInactive : StarActive}
        alt="logo etoile"
      />
    </div>
  );
}

export default Stars;
