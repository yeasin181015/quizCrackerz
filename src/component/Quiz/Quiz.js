import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizoption from "../Quizoption/Quizoption";
import "./Quiz.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Quiz = () => {
  const quizItem = useLoaderData();
  const quizQuestions = quizItem.data.questions;
  let i = 0;
  console.log(quizQuestions);

  const checkAnswer = (answer, id) => {
    quizQuestions.map((que) => {
      if (que.id === id) {
        que.correctAnswer == answer
          ? toast("Correct answer.")
          : toast("Wrong answer.");
      }
    });
  };

  const showAnswer = (queID) => {
    quizQuestions.map((q) => {
      if (q.id === queID) {
        toast(q.correctAnswer);
      }
    });
  };

  return (
    <React.Fragment>
      <h1>Quiz of {quizItem.data.name}</h1>

      <div className="questions-div">
        {quizQuestions.map((question) => (
          <div className="questions-inner-div" key={i}>
            <div style={{ padding: "0 10px" }}>
              <div className="quiz-question">
                <span className="quiz-no">
                  Quiz {(i = i + 1)}: {question.question}
                </span>
                <span onClick={() => showAnswer(question.id)}>
                  <EyeIcon className="eye-icon" />
                </span>
              </div>
              <div className="option">
                {question.options.map((choice) => (
                  <div>
                    <Quizoption
                      choice={choice}
                      key={choice}
                      checkAnswer={checkAnswer}
                      questionID={question.id}
                    ></Quizoption>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Quiz;
