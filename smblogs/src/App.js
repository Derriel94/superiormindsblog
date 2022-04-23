import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./Components/Home/Home.js";  
import Nav from "./Components/Nav/Nav.js"; 
import SignUpForm from "./Components/Home/SignUpForm.js"; 

const App = () => {

  return (
    <div className="App" style={{color: "papayawhip"}}>
      <Router>
        <div className="header-container">
           <div><Link to="/" style={{color: "papayawhip"}}>Superior Minds</Link></div>
           <Link to="/signin" style={{color: "papayawhip"}}><p id="signin">SignIn</p></Link>          
            <Link to="/register" style={{color: "papayawhip"}}><p id="register">Register</p></Link> 
        </div>
        <Nav /> 
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes> 
        <div className="footer">
          <Link to="/" style={{color: "papayawhip"}}><h1>Superior Minds</h1></Link>
          <Nav />
          <div className="signup-div-container">
            <div>Dont forget to signup to my newsletter! Ill be giving you updates
            on when new blogs are out, as well as music and voiceovers!</div>
            <h1>Social Media</h1>
            <div>Instagram: Mactract (Photography)</div>
            <div>Linkdein: Chris Mac</div>
            <div>YouTube: Chris Mac</div>
            <div>Instagram: blaketheruler</div>      
          </div>  
       </div>   
      </Router>
    </div>
  );
};
  
export default App;