import React from 'react';
import { Link } from "react-router-dom";
import '../style/main.scss'

export default function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        
      </div>

      <div className="nav-bar-links">
        <Link exact to="/">Dashboard</Link>
        <Link to="/create">New Ticket</Link>
        
      </div>
        
    </div>
  );
}