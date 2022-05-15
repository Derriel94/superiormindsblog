import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./Components/Home/Home.js"; 
import Register from "./Components/Register.js";
import Signin from "./Components/Signin.js";  
import Blogs from "./Components/Blogs/Blogs.js";
import Nav from "./Components/Nav/Nav.js"; 
import Editor from "./Components/FileUpload.js";


const App = () => {
  //No clue what the below code does, and I need to figure that out asap
  // var initialConnection = true;
  //   if (initialConnection === true){
  //     let initialConnection = false;
  //   } 
    Axios.defaults.withCredetials = true;
   const [token, setToken] = useState();


  const [user, setUser] = useState(localStorage.getItem('user') === 
    JSON.stringify({
    userId: '',
    name: '',
    email: ''
  }));
  const [username, setUserName] = useState(localStorage.getItem('user')=== JSON.stringify({username: user.name}))
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('loggedIn') ==='true'
    );
  const loadUser = (user) => {
    setUser({
      userId: user.userId,
      name: user.name,
      email: user.email,
    }) 
    setIsLoggedIn(true);
   setUserName(user.name)
  }
  const signOutUser = (user) => {
    setUser({
      userId: '',
      name: '',
      email: ''
    })
    setIsLoggedIn('false')
    window.location.reload(true);
  } 


 useEffect(()=> {
  localStorage.setItem('loggedIn',isLoggedIn);
  localStorage.setItem('user', user.name);
    
 },[isLoggedIn, user.name]);

  return (
    <div className="App" style={{color: "papayawhip"}}>
      <Router>
        <div className="header-container">
           <div><Link to="/" style={{color: "papayawhip"}}>Superior Minds</Link></div>
            {isLoggedIn
            ?
              <p onClick={()=>signOutUser(user)} id="signOut">SignOut: {user.name}</p>
            :
              <Link to="/signin" style={{color: "papayawhip"}}><p id="signin">SignIn</p></Link>
            }
            <Link to="/register" style={{color: "papayawhip"}}><p id="register">Register</p></Link> 
        </div>
        <Nav /> 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/register" element={<Register />} />
            {!token
            ?
            <Route path="/signin" element={<Signin loadUser={loadUser} setToken={setToken}  />} />
            :
            <Route path="/signin" element={<Signin loadUser={loadUser} />} />
            } 
            
          </Routes> 
        <div className="footer">
          <Link to="/" style={{color: "papayawhip"}}><h1>Superior Minds</h1></Link>
          <Nav />
          <div className="signup-div-container">
            <div>Dont forget to signup to my newsletter! Ill be giving you updates
            on when new blogs are out, as well as music and voiceovers!</div>
            <h1>Social Media</h1>
            <div>Instagram: Mactract (Photography)</div>
            <div>Linkdein: Mad Mac</div>
            <div>YouTube: Chris Mac</div>
            <div>Instagram: blaketheruler</div>      
          </div>  
       </div>   
      </Router>
    </div>
  );
};
  
export default App;