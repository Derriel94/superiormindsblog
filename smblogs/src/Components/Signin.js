import React, { useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
//import './Signin.css';


const Signin = ( {loadUser} ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const onEmailChange = (e) => {setEmail(e.target.value)};
  const onPasswordChange = (e) => {setPassword(e.target.value)};
Axios.defaults.withCredetials = true;
  const onSubmitSignIn = () => {
    Axios.post('http://localhost:3001/signin',{ 
        email: email,
        password: password,
    })
    // .then(res=> res.json())
    .then(res => {
      if (res.message) {
        alert('Wrong Creditials Fool!');
        navigate("/signin");
      } else if (res.data[0].name === "ChrisMac" && res.data[0].userId === 1){
       alert(`${res.data[0].name} You are the Leader lets Go Blog!`);
       loadUser(res.data[0])
        // navigate("/editor")
       console.log(res.data[0].name);
     } else if (res.data[0].name !== "ChrisMac" && res.data[0].userId) {
        alert(`${res.data[0].name} you are signed In`);
        loadUser(res.data[0])
        // navigate("/blogs");
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