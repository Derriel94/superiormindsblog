import React from 'react';
import "./../../App.css";
// import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.js"; 


const Home = () => {

	return (
	<div className="home">
	<img className="header-image"alt="superiorheader" src="./header.jpg" />
    <SignUpForm />
	
	</div>
			
		);
}

export default Home;