import { useLoaderData } from "react-router-dom";
import "./Quiz.css";
const Quiz = () => {
  const quizItem = useLoaderData();
  const quizQuestions = quizItem.data.questions;
  let i = 0;

  return (
    <div>
      <h1>Quiz of {quizItem.data.name}</h1>
      {quizQuestions.map((question) => (
        <div key={i}>
          <h2>
            Quiz {(i = i + 1)}: {question.question}
          </h2>
          <div className="option">
            <div>{question.options[0]}</div>
            <div>{question.options[1]}</div>
            <div>{question.options[2]}</div>
            <div>{question.options[3]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
