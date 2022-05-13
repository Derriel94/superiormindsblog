import React, { useState, useEffect } from "react";
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
 

  const [user, setUser] = useState({
    userId: '',
    name: '',
    email: ''
  });

  const loadUser = (user) => {
    setUser({
      userId: user.userId,
      name: user.name,
      email: user.email,
    })
  }
  const signOutUser = (user) => {
    setUser({
      userId: '',
      name: '',
      email: ''
    })
    window.location.reload(true);
  } 

  useEffect(()=> { 
      Axios.post('http://localhost:3001/signinsess')
    .then((response)=> {

           if (response.data.loggedIn === true){
            console.log(response.data);
           }
      
    });
  }, []);
  return (
    <div className="App" style={{color: "papayawhip"}}>
      <Router>
        <div className="header-container">
           <div><Link to="/" style={{color: "papayawhip"}}>Superior Minds</Link></div>
            {user.name  
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
            <Route path="/signin" element={<Signin loadUser={loadUser} />} />
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