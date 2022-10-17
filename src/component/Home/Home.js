import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const items = useLoaderData();

  return (
    <div>
      <div className="site">
        <div className="site-image">
          <div className="tab-view">
            <p className="tab-view-paragraph">
              You might want to become a Web Developer because there are many
              high-paying jobs available, Web Developers can work from anywhere,
              and web development jobs tend to offer good work-life balance.
              Though there are obviously a number of different specializations
              within web development, the bottom line is most jobs in web
              development are considered great careers in terms of salary,
              benefits and perks, and opportunity for advancement.
            </p>
          </div>
          <div className="tab-view">
            <img
              src="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
              alt=""
              className="tab-view-image"
            />
          </div>
        </div>
        <div className="site-text">
          <p className="site-text-paragraph">
            Being a Web Developer is not without its challenges, however, as the
            field involves continuous learning, problem-solving, and critical
            thinking. This is a field that never stops changing as new
            technologies, best practices, and other innovations are introduced,
            which means Web and Software Developers have to work hard to keep
            current on the latest coding languages and industry trends to ensure
            they stay relevant over the course of their web development careers.
          </p>
          <p className="site-text-paragraph">
            You might want to become a Web Developer because there are many
            high-paying jobs available, Web Developers can work from anywhere,
            and web development jobs tend to offer good work-life balance.
            Though there are obviously a number of different specializations
            within web development, the bottom line is most jobs in web
            development are considered great careers in terms of salary,
            benefits and perks, and opportunity for advancement.
          </p>
          <p className="mobile-view-text">
            More than 80 percent of Web Developers are employed full-time, with
            another 10 percent working on a freelance basis or part-time
            according to Stack Overflow. That number isn’t expected to decrease,
            since virtually every company you could think of in every industry
            you could think of hires Web Developers. That explains in part why
            so many potential job changers are learning web development.
          </p>
        </div>
      </div>
      <div className="topic-level">
        {items.data.map((topic) => (
          <Card key={topic.id} topic={topic}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
