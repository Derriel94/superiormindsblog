import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Components/Home/Home.js";  
import Nav from "./Components/Nav/Nav.js";  

const App = () => {
  return (
    <div className="App">
      <Router> 
        <Nav /> 
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>    
      </Router>
    </div>
  );
};
  
export default App;