import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";

export class MainPage extends Component {
  render() {
    return (
      <Router>
        <div className="MainPage">
          <h1>Main Page</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainPage;
