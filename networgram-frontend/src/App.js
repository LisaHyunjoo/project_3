import React, { Component } from "react";
import "./App.css";
import Newpost from './Components/page/Newpost'
import Comment from "./Components/page/Comment";
import Profile from './Components/page/Profile'
import Login from "./Components/page/Login";
import Register from "./Components/page/Register";

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
