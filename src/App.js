import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Subjects from './components/Subjects/Subjects';
import AllLectures from './components/AllLectures/AllLectures';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const isAuth = localStorage.getItem("USER_TOKEN")
  return (
    <div className="App">

      <Router basename='dr-python'>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to={"/subjects"} /> : <Login />} />
          <Route path="/lectures/:subjectId/:lectureId" element={isAuth ? <Home /> : <Navigate to={"/"} />} />
          <Route path="/subjects" element={isAuth ? <Subjects /> : <Navigate to={"/"} />} />
          <Route path="/all_lectures/:subjectId" element={isAuth ? <AllLectures /> : <Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
