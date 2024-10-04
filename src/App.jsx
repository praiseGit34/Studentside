import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css'; 

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/api/placeholder/50/50" alt="EduLink Logo" />
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

function CourseCard({ title, icon }) {
  return (
    <div className="course-card">
      <img src={icon} alt={title} className="course-icon" />
      <h3>{title}</h3>
      <button className="view-button">View</button>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome back, Brian</h1>
        <p>Always Stay Updated in your Student Portal</p>
        <span className="date">20th September 2024</span>
      </header>
      <main className="dashboard-content">
        <section className="enrolled-courses">
          <h2>Enrolled Courses <span className="see-all">See all</span></h2>
          <div className="course-list">
            <CourseCard title="Javascript cohort 6" icon="/api/placeholder/30/30" />
            <CourseCard title="Database Systems Management" icon="/api/placeholder/30/30" />
          </div>
        </section>
        <section className="statistics">
          <h2>Statistics</h2>
          <div className="chart">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <button className="view-button">View</button>
          </div>
        </section>
        <section className="tutors">
          <h2>My Tutors <span className="see-all">See all</span></h2>
          <div className="tutor-list">
            <img src="/api/placeholder/40/40" alt="Tutor 1" className="tutor-avatar" />
            <img src="/api/placeholder/40/40" alt="Tutor 2" className="tutor-avatar" />
            <img src="/api/placeholder/40/40" alt="Tutor 3" className="tutor-avatar" />
          </div>
        </section>
        <section className="notices">
          <h2>Daily Notices <span className="see-all">See all</span></h2>
          <div className="notice-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur eu nunc.</p>
            <a href="#" className="read-more">Read more</a>
          </div>
        </section>
      </main>
    </div>
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
              <img src="/api/placeholder/40/40" alt="User Avatar" className="user-avatar" />
              <span>Brian Doe</span>
              <span className="year">Year 5</span>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;