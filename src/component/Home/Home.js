import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const items = useLoaderData();

  return (
    <div className="topic-level">
      {items.data.map((topic) => (
        <Card key={topic.id} topic={topic}></Card>
      ))}
    </div>
  );
};

export default Home;
