import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Quizoption.css";

const Quizoption = ({ choice, checkAnswer, questionID }) => {
  return (
    <>
      <div
        className="choice"
        onClick={() => {
          checkAnswer(choice, questionID);
        }}
      >
        {choice}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Quizoption;
