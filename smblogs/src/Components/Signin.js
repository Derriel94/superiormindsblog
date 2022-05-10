import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import './Signin.css';


const Signin = () => {

  const [email, setEmail] = useState('ThisisYourGrandaddy.com');
  const [password, setPassword] = useState('Type Your Password Grandson');
  const navigate = useNavigate();
  const onEmailChange = (e) => {setEmail(e.target.value)};
  const onPasswordChange = (e) => {setPassword(e.target.value)};

  const onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.message) {
        alert('Wrong Creditials Fool!');
        navigate("/signin");
      } else {
        alert(`${res.name} you are signed In`);
        navigate("/blogs");
       console.log(res.name);
     }
    })

    
  }

  return(
    <article className="">
      <main className="">
        <div className="">
          <fieldset id="sign_up" className="">
            <legend className="">Sign In</legend>
            <div className="">
              <label className="" htmlFor="email-address">Email</label>
              <input onChange={onEmailChange} className="" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="" htmlFor="password">Password</label>
              <input onChange={onPasswordChange} className="" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input onClick={onSubmitSignIn}className="" type="submit" value="Sign in" />
          </div>
          <div className="">
            <Link to="/register" style={{color: "papayawhip"}}><p id="register">Register</p></Link> 
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;