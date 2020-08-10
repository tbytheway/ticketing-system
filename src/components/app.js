import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard';
import Create from './create';
import Navigation from './navigation';
import "../style/main.scss";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header"></div>
        <div className="side-menu">
        <Navigation />
        </div>
        <Switch>
            <div><Route exact path="/" component={Dashboard}/></div>
            <div><Route path="/create" component={Create}/></div>
        </Switch>
      </div>
    );
  }
}
