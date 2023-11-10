import "../../style/style.css";
import "../../style/Housing.css";

function Host({ house }) {
  return (
    <div className="host">
      <img src={house.host.picture} className="hostPicture" alt="hote" />
      <p className="hostName">{house.host.name}</p>
    </div>
  );
}

export default Host;
