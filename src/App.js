import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Subjects from './components/Subjects/Subjects';
import AllLectures from './components/AllLectures/AllLectures';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lectures" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/all_lectures" element={<AllLectures />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
