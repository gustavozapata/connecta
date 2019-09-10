import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Friend from "./components/Friend";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="MainPage">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/friends" component={Friends} />
            <Route path="/friends/:id" component={Friend} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
