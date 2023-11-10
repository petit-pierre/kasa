import "../../style/style.css";
import "../../pages/Housing/housing.css";

function Tags({ house }) {
  return (
    <div className="tags">
      {house.tags.map((tag) => (
        <p key={tag} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tags;
