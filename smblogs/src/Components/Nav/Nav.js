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
        <div className="nav-right">
           {/* <button onClick={handleHamburgerMenuClick}id="minibutton" className="minimenu">
            </button>*/} 
          <div><Link to="/blogs" style={{ textDecoration: 'none', color: 'black' }}>Blogs</Link></div>
          <div><Link to="/music" style={{ textDecoration: 'none', color: 'black' }}>Music</Link></div>
          <div><Link to="/voiceovers" style={{ textDecoration: 'none', color: 'black' }}>VoiceOvers</Link></div>
          <div><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Mac</Link></div>
        </div>      
      </div>
			
		);
}

export default Nav;