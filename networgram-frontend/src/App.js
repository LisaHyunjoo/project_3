import React, { Component } from "react";
import "./App.css";
import Newpost from './Components/Wall/Newpost'
import Comment from "./Components/Wall/Comment";
import Profile from './Components/User/Profile'
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";

function App() {
  return (
    <>
      < Newpost />
      <Comment />
      <Profile />
      <Login />
      <Register />
    </>
  );
}

export default App;
