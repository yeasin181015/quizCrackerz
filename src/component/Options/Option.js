import { Link } from "react-router-dom";
import "./Option.css";

const Option = ({ route }) => {
  return (
    <Link to={route.path} className="route">
      {route.name}
    </Link>
  );
};

export default Option;
