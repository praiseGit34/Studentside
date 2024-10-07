import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import eduLogo from './assets/edu.png';
import student from './assets/brian.jpeg';
// Import pages
import Dashboard from './pages/Dashboard.jsx';
import Registration from './pages/Registration.jsx';
import Timetable from './pages/Timetable.jsx';
import ExamSchedule from './pages/Exam.jsx';
import Assignments from './pages/Assignments.jsx';
import Result from './pages/Result.jsx';
import Notices from './pages/Notices.jsx';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={eduLogo} alt="EduLink Logo" />
        <h2>EduLink</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/timetable">Timetable</Link></li>
          <li><Link to="/exam-schedule">Exam Schedule</Link></li>
          <li><Link to="/assignments">Assignments</Link></li> 
          <li><Link to="/results">Results</Link></li>
          <li><Link to="/notices">Notices</Link></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <Link to="/logout">Logout</Link>
      </div>
    </aside>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <header className="top-bar">
            <h1>EduLink</h1>
            <div className="user-info">
              <img src={student} alt="User Avatar" className="user-avatar" />
              <span>Brian Doe</span>
              <span className="year">Year 5</span>
            </div>
          </header>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/exam-schedule" element={<ExamSchedule />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/results" element={<Result />} />
            <Route path="/notices" element={<Notices />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
