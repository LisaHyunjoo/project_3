import React, { Component } from "react";
import "./App.css";
import Newpost from "./Components/Wall/Newpost";
import Comment from "./Components/Wall/Comment";
import Profile from "./Components/User/Profile";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Newpost />
        <Comment />
        <Profile />
        <Login />
        <Register />
      </>
    );
  }
}

export default App;
