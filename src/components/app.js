import React, {Component} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './dashboard';
import Create from './create';
import Navigation from './navigation';
import "../style/main.scss";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <div className="app-header"></div> */}
        
        
      
      <div className="side-menu">
        <Navigation />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/create" component={Create}/>
        </Switch>
        </div>
      </div>
    );
  }
}
