import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/front-page/Homepage';
import Questions from './components/main-page/Questions';
import ResultPage from './components/result-page/ResultPage';

function App() {
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
