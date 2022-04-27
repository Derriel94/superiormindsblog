import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import './Signin.css';


const Register = (  ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const onEmailChange = (e) => {setEmail(e.target.value)};
  const onPasswordChange = (e) => {setPassword(e.target.value)};
  const onNameChange = (e) => {setName(e.target.value)};


  const onSubmitRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        name: name,
        password: password
        
      })
    })
      .then(response => {
        if (response.status === 400){
          return alert('You did not finish your login creditials. Refresh page and start over!')
        //try event default here
        } else if (response.status === 200) {
          return alert('Thanks for Registering You will be redirected to the blogs')
          // navigate("/blogs");
        } 
          //display editor link    
          //and or redirect to editor page
      })
      .then(res => {
        alert("You are now an editor");
        navigate("/editor");
      })
    //   .then(user => {
    //   if (user.id) {
    
    //   }
    // });     
  };

  return(
    <article className="">
      <main className="">
        <div className="">
          <fieldset id="sign_up" className="">
            <legend className="">Register</legend>
            <div className="">
              <label className="" htmlFor="name">Name</label>
              <input onChange={onNameChange} className="" type="name" name="name"  id="name" />
            </div>
            <div className="">
              <label className="" htmlFor="email-address">Email</label>
              <input onChange={onEmailChange} className="" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="">
              <label className="" htmlFor="password">Password</label>
              <input onChange={onPasswordChange} className="" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input onClick={onSubmitRegister}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;