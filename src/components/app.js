import React, {Component} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './dashboard';
import Create from './create';
import Navigation from './navigation';
import Auth from "./auth";
import Thanks from './thanks'
import "../style/main.scss";


export default class App extends Component {
  constructor(props) {
    super(props)

      this.state = {
        loggedInStatus: "NOT_LOGGED_IN"
      }
      this.handleUnSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
      this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className="app">
        <div className="side-menu">
          <Navigation />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {/* <h2>{this.state.loggedInStatus}</h2> */}
          <Switch>
            <Route
               path="/auth"
               render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                   /> 
               )}/>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/create" component={Create}/>
            <Route path="/thanks" component={Thanks}/>
          </Switch>
        </div>
      </div>
    );
  }
}
