import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {


  const handleHamburgerMenuClick = (e) => {
    const button = document.getElementById("minibutton");
    const nav = document.getElementById("mynav");
    nav.classList.toggle('show');
  }
  

	return (      
		<div className="nav"> 
           {/* <button onClick={handleHamburgerMenuClick}id="minibutton" className="minimenu">
            </button>*/} 
          <h1><Link to="/editor" style={{ textDecoration: 'none', color: 'blue' }}>EDITOR</Link></h1>
          <h1><Link to="/blogs" style={{ textDecoration: 'none', color: 'papayawhip' }}>Blogs</Link></h1>
          <h1><Link to="/music" style={{ textDecoration: 'none', color: 'papayawhip' }}>Music</Link></h1>
          <h1><Link to="/voiceovers" style={{ textDecoration: 'none', color: 'papayawhip' }}>VoiceOver</Link></h1>
          <h1><Link to="/contact" style={{ textDecoration: 'none', color: 'papayawhip' }}>Contact Mac</Link></h1>  
      </div>
			
		);
}

export default Nav;