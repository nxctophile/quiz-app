import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./app/index";
import Questions from "./app/questions";
import ResultPage from "./app/results";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const answers = useSelector((state) => state.answer.value);
  
  useEffect(() => {
    const localStorageName = localStorage.getItem("name");
    if (
      localStorageName &&
      answers.length !== 10 &&
      window.location.pathname !== "/quiz" &&
      window.location.pathname !== "/results"
    )
      window.location.pathname = "/quiz";
    if (
      localStorageName &&
      answers.length === 10 &&
      window.location.pathname !== "/results"
    )
      window.location.pathname = "/results";
  }, [answers.length]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Questions />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
