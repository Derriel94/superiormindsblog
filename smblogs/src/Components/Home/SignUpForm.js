
import React from "react";
import * as Yup from "yup";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
  });

  console.log(props);
  return (
    <div className="form-wrapper">
      <form {...props} validationSchema={validationSchema} >
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email"><b>Drop Yo Email Guy/Gal/They</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br/>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <br/>
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
          <br/>
          <label>Remember me</label>
          <input type="checkbox" name="remember" />
          <p className="terms">By creating an account you agree to our <a href="https://ghost-code.herokuapp.com/">Terms & Privacy</a>.</p>
          <div class="">
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form> 
    </div>
  );
};
  
export default SignUpForm;