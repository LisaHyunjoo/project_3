import React, { Component } from "react";
import "./App.css";
import Newpost from './Components/Wall/Newpost'
import Profile from './Components/User/Profile'
import Login from "./Components/User/Login";

function App() {
  return (
    <>
      < Newpost />
      <Profile />
      <Login />
    </>
  );
}

export default App;
