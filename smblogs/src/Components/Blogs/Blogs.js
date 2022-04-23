import React from 'react';
import "./Blogs.css";



const Blogs = () => {

	return (
		<div className="home blogs">
			<div className="main-blog">
				<h1>Blog title</h1>
				<img src="./logo.png" alt="mac"/>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>	
			<div className="side-blog1">
				<p>Blog Tilte</p>
			</div>
			<div className="side-blog2">
				<p>Blog Tilte</p>
			</div>	
		</div>
		);
}

export default Blogs;