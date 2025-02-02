import React, { useEffect, useState } from "react";
import "../styles/ResultPage.css";
import data from "../data.json";
import bg from "../assets/bg.mp4";

function ResultPage() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers") || "[]");
    setAnswers(storedAnswers);
  }, []);

  if (!data?.questions || !Array.isArray(data.questions)) {
    return <div>Error: Quiz data is not available.</div>;
  }

  const handleRetake = () => {
    localStorage.removeItem("answers");
    window.location.href = "/quiz";
  };

  const correctAnswersCount = answers.filter((answer, index) => {
    const question = data.questions[index];
    if (!question) return false;

    const correctOption = question.options.find((option) => option.is_correct);
    return answer.answer === correctOption?.description;
  }).length;

  const wrongAnswersCount = answers.length - correctAnswersCount;

  return (
    <div className="result-root-container">
      <video autoPlay muted loop>
        <source src={bg} type="video/mp4" />
      </video>

      <div className="result-container">
        <div className="heading">
          <h1>Quiz Summary</h1>
          <div className="correct-incorrect">
            <p>
              Correct Answers: {correctAnswersCount} | Wrong Answers:{" "}
              {wrongAnswersCount}
            </p>
          </div>
        </div>

        <div className="detailed-summary">
          {answers.map((answer, index) => {
            const question = data.questions[index];
            if (!question) return null;

            const correctOption = question.options.find(
              (option) => option.is_correct
            );

            return (
              <div className="required-question" key={index}>
                <h4>
                  Q{index + 1} - {question.description}
                </h4>
                <div className="context">
                  <div className="ans-compare">
                    <span>Correct Answer:</span>
                    <span>{correctOption?.description || "N/A"}</span>
                  </div>
                  <div className="ans-compare">
                    <span>Your Answer:</span>
                    <span>{answer.answer || "N/A"}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="retake-quiz-container">
          <button onClick={handleRetake} className="btn-to-retake-quiz">
            <span>Retake Quiz</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#dddddd"
            >
              <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
