import React, { Component } from "react";
import "./App.css";
import Newpost from './Components/Wall/Newpost'
import Profile from './Components/User/Profile'

function App() {
  return (
    <>
      < Newpost />
      <Profile />
    </>
  );
}

export default App;
