import React, { useEffect, useState } from "react";
import "../styles/ResultPage.css";
import data from "../data.json";

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
    <div>
      <video autoPlay muted loop>
        <source src="../assets/front-page.mp4" type="video/mp4" />
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
                <h3>Question {index + 1}</h3>
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
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
