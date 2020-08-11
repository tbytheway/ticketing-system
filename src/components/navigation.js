import React from 'react';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import '../style/main.scss'
import Dashboard from './dashboard'
import Create from './create'

export default function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        
      </div>

    
      <div className="nav-bar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/create">New Ticket</Link>
      </div>
    
          
    </div>
  );
}