import "./Card.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ topic }) => {
  return (
    <div className="card-div">
      <div className="inner-card-div">
        <img
          src={`${topic.logo}`}
          alt="Not available"
          className="topic-logo"
          style={{
            backgroundColor: topic.name === "Git" ? "black" : "white",
          }}
        />
        <div className="topic-name">
          <p className="name">{topic.name}</p>
          <button className="practice-btn">
            <Link to={`/api/quiz/${topic.id}`}>
              <span className="practice-btn-span">Start practice</span>
            </Link>
            <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
