import React, { useState, useEffect } from "react";
import axios from 'axios';
import SignUpForm from "./SignUpForm";
  
// CreateStudent Component
const CreateBlogger = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' });
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
'http://localhost:3001/blogger/create-blogger', 
    studentObject)
      .then(res => {
        if (res.status === 200)
          alert('Blogger successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <SignUpForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Student
    </SignUpForm>
  )
}
  
// Export CreateStudent Component
export default CreateBlogger;