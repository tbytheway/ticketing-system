import React from 'react';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import '../style/main.scss'

export default function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        
      </div>

    
      <div className="nav-bar-links">
        <div>Terry's Tickets</div>
        <div><Link to="/">Dashboard</Link></div>
        <div><Link to="/create">Support</Link></div>
      </div>
    
          
    </div>
  );
}