import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {


  const handleHamburgerMenuClick = (e) => {
    const button = document.getElementById("minibutton");
    const nav = document.getElementById("mynav");
    nav.classList.toggle('show');
  }
  

	return (      
		<div className="nav"> 
        <button onClick={handleHamburgerMenuClick}id="minibutton" className="minimenu">
            </button>
        <div className="nav-left">
          <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Superior Minds</Link></div> 
        </div>
        <div className="nav-right"> 
          <div><Link to="/blogs" style={{ textDecoration: 'none', color: 'black' }}>Blogs</Link></div>
          <div><Link to="/music" style={{ textDecoration: 'none', color: 'black' }}>Music</Link></div>
          <div><Link to="/voiceovers" style={{ textDecoration: 'none', color: 'black' }}>VoiceOvers</Link></div>
           <div><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Mac</Link></div>
        </div>      
      </div>
			
		);
}

export default Nav;