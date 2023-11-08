import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function TestHousing() {
  const { houseNumber } = useParams();
  Logements.find((Logements) => Logements.id === houseNumber) ? (
    <Navigate to="../Housing/" replace={true} />
  ) : (
    <Navigate to="../404/" replace={true} />
  );
}

export default TestHousing;
