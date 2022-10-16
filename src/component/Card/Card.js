import "./Card.css";
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
          <button className="practice-btn">Start practice</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
