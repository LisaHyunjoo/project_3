import React, { Component } from "react";
import "./App.css";
import Newpost from "./Components/Wall/Newpost";
import Comment from "./Components/Wall/Comment";
import Profile from "./Components/User/Profile";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "heroku backend url";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
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
