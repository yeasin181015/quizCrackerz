import Accordion from "react-bootstrap/Accordion";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="accordion-outerdiv">
      <div className="accordion-innerdiv">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is React Router used for?</Accordion.Header>
            <Accordion.Body>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL. Let us create a simple application to
              React to understand how the React Router works. The application
              will contain three components: home component, about a component,
              and contact component. We will use React Router to navigate
              between these components.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does Context API works?</Accordion.Header>
            <Accordion.Body>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is useref in react?</Accordion.Header>
            <Accordion.Body>
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property. You might be familiar with refs
              primarily as a way to access the DOM. If you pass a ref object to
              React with " div ref = myRef ", React will set its .current
              property to the corresponding DOM node whenever that node changes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
