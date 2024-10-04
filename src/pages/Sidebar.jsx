import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <i className="bx bxs-graduation" style={{fontSize: "3rem"}}></i>
        <h2>Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/dashboard"><i className="bx bxs-dashboard"></i> Dashboard</Link></li>
          <li><Link to="/assignments"><i className="bx bx-task"></i> Assignments</Link></li>
          
        </ul>
      </nav>
      <div className="sidebar-footer">
        <Link to="/logout"><i className="bx bx-log-out"></i> Logout</Link>
      </div>
    </aside>
  );
}

export default Sidebar;