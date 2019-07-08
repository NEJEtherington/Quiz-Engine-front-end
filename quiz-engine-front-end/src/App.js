import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

class App extends React.Component {
  state = {
    loggedInUser: localStorage.getItem("loggedInUser") || null
  };

  loginUser = username => {
    this.setState({ loggedInUser: username });
    localStorage.setItem("loggedInUser", username);
  };

  logoutUser = e => {
    this.setState({ loggedInUser: null });
    localStorage.removeItem("loggedInUser");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header
            loginUser={this.loginUser}
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
          />
        </header>
        <Router>
          <HomePage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
