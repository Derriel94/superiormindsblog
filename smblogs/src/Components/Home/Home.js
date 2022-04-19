import React from 'react';
import "./../../App.css";
// import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.js"; 


const Home = () => {

	return (
	<div className="home">
		<div className="header-image-container">
			<img className="header-image"alt="superiorheader" src="./header.jpg" />
    	</div>
    	<div className="logo-container">
    		<img className="logo" src="./logo.png"/>
    	</div>
    	<SignUpForm />
	
	</div>
			
		);
}

export default Home;