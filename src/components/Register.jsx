import React, { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import cvContext from '../context/cvContext';
import { useNavigate } from "react-router-dom";


export default function Register() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const { formData, setFormData } = useContext(cvContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user);
                navigate("/edit")
            })
            .catch((err) => {
                console.log(err.message);
            })
    };

    return (
        <div>
            <h5>REGISTER</h5>

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
            </Form></div>
    )
}