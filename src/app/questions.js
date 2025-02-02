import React, { useEffect, useState } from "react";
import "../styles/Questions.css";
import Options from "../components/Options";
import Header from "../components/Header";
import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../store/answerSlice";
import bg from "../assets/bg.mp4";

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answer.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data || !data.questions || !data.questions[currentQuestion]) {
      console.error("Question data is missing or undefined.");
      return;
    }
    const selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );

    const previousSelectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (previousSelectedOption) {
      previousSelectedOption.checked = false;
    }

    if (!selectedOption) {
      console.error("No option selected.");
      return;
    }

    let choice = {
      question: data.questions[currentQuestion].description,
      answer: selectedOption.value,
    };

    const isDuplicate = answers.some(
      (answer) => answer.question === choice.question
    );

    if (!isDuplicate && currentQuestion < data.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      dispatch(addAnswer(choice));
    }

    if (currentQuestion < data.questions.length) {
      let storedAnswers = JSON.parse(localStorage.getItem("answers")) || [];
      storedAnswers.push(choice);
      localStorage.setItem("answers", JSON.stringify(storedAnswers));
    }

    if (currentQuestion === data.questions.length - 1) {
      window.location.href = "/results";
    }
  };

  useEffect(() => {
    localStorage.removeItem("answers");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <video autoPlay muted loop>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="elements-container">
          <Header />
        <div className="question-tab">
          <div className="questions-container">
            <div className="questions">
              <h2>
                Q{currentQuestion + 1}.{" "}
                {data?.questions?.[currentQuestion]?.description ||
                  "Loading..."}
              </h2>
              {data?.questions?.[currentQuestion]?.options ? (
                <Options
                  setCurrentQuestion={setCurrentQuestion}
                  currentQuestion={currentQuestion}
                  options={data.questions[currentQuestion].options}
                />
              ) : (
                <p>Loading options...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
