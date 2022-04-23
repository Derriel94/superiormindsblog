import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./Components/Home/Home.js";  
import Nav from "./Components/Nav/Nav.js";  

const App = () => {

  return (
    <div className="App" style={{background: "black", color: "papayawhip"}}>
      <Router>
        <div className="header-container">
            {/*add link here*/}<h1>Superior Minds</h1>
        </div>
        <Nav /> 
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes> 
        <div className="footer">
          <h1 className="">Superior Minds</h1>
          <Nav />
          <p>Dont forget to signup to my newsletter! Ill be giving you updates
          on when new blogs are out, as well as music and voiceovers!</p>
        </div>   
      </Router>
    </div>
  );
};
  
export default App;