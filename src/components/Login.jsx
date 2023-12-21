import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import cvContext from '../context/cvContext';
// import userContext from '../context/userContext';
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { formData, setFormData } = useContext(cvContext);




  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(formData);
        navigate("/list")

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h5>LOGIN</h5>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
      </Button>
      </Form>
    </>
  );
}