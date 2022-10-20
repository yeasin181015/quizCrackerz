import "./Header.css";
import Option from "../Options/Option";

const Header = () => {
  const routes = [
    { id: 1, name: "Topics", path: "/topics" },
    { id: 2, name: "Statistics", path: "/statistics" },
    { id: 3, name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="navbar">
      <div className="quiz-bash">
        <span className="icon-name">Quiz Bash</span>
      </div>
      <div className="navbar-option">
        {routes.map((route) => (
          <Option key={route.id} route={route}></Option>
        ))}
      </div>
    </nav>
  );
};

export default Header;
