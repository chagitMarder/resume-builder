import React, { useContext, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import cvContext from '../context/cvContext';
import { Link, useNavigate } from 'react-router-dom';
import UpImage from './UpImage';

export default function ResumeForm() {
  const navigate = useNavigate();
  const { formData, setFormData, handleSubmit } = useContext(cvContext);




  const companyHendler = (text, value) => {
    switch (text) {
      case "name":
        setFormData({ ...formData, workExperience1: { ...formData.workExperience1, companyName: value } })
        break;
      case "time":
        setFormData({ ...formData, workExperience1: { ...formData.workExperience1, timeFrame: value } })
        break;
      case "description":
        setFormData({ ...formData, workExperience1: { ...formData.workExperience1, description: value } })
        break;
      case "role":
        setFormData({ ...formData, workExperience1: { ...formData.workExperience1, role: value } })
        break;

    }
  }

  const companyHendler2 = (text, value) => {
    switch (text) {
      case "name":
        setFormData({ ...formData, workExperience2: { ...formData.workExperience2, companyName: value } })
        break;
      case "time":
        setFormData({ ...formData, workExperience2: { ...formData.workExperience2, timeFrame: value } })
        break;
      case "description":
        setFormData({ ...formData, workExperience2: { ...formData.workExperience2, description: value } })
        break;
      case "role":
        setFormData({ ...formData, workExperience2: { ...formData.workExperience2, role: value } })
        break;

    }
  }

  const educationHendler = (text, value) => {
    switch (text) {
      case "name":
        setFormData({ ...formData, education1: { ...formData.education1, school: value } })
        break;
      case "time":
        setFormData({ ...formData, education1: { ...formData.education1, timeFrame: value } })
        break;
      case "course":
        setFormData({ ...formData, education1: { ...formData.education1, course: value } })
        break;
      case "description":
        setFormData({ ...formData, education1: { ...formData.education1, description: value } })
        break;

    }
  }
  const educationHendler2 = (text, value) => {
    switch (text) {
      case "name":
        setFormData({ ...formData, education2: { ...formData.education2, school: value } })
        break;
      case "time":
        setFormData({ ...formData, education2: { ...formData.education2, timeFrame: value } })
        break;
      case "course":
        setFormData({ ...formData, education2: { ...formData.education2, course: value } })
        break;
      case "description":
        setFormData({ ...formData, education2: { ...formData.education2, description: value } })
        break;

    }
  }

  return (
    <div>
      <Form>
        <h3>Resume form:</h3>
        <br />
        <UpImage />

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="firstName" value={formData.firstName} onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }) }} />
          <Form.Control type="text" placeholder="lastName" value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Work experience</Form.Label>
          <Container>
            <Row>
              <h5>Work experience 1:</h5>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Company name" onChange={(e) => { companyHendler("name", e.target.value) }} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="time frame" onChange={(e) => { companyHendler("time", e.target.value) }} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="role" onChange={(e) => { companyHendler("role", e.target.value) }} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="description" onChange={(e) => { companyHendler("description", e.target.value) }} />
              </Col>
            </Row>
            <Row>
              <h5>Work experience 2:</h5>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Company name" onChange={(e) => { companyHendler2("name", e.target.value) }} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="time frame" onChange={(e) => { companyHendler2("time", e.target.value) }} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="role" onChange={(e) => { companyHendler2("role", e.target.value) }} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="description" onChange={(e) => { companyHendler2("description", e.target.value) }} />
              </Col>
            </Row>
          </Container>
          {/* <Button variant="primary" type="button" onClick={() => { addWorkExperience() }}>MORE</Button> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Education</Form.Label>
          <Container>
            <Row>
              <h5>Education 1:</h5>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="subject" onChange={(e) => { educationHendler2("name", e.target.value) }} /></Col>
              <Col>
                <Form.Control type="text" placeholder="time frame" onChange={(e) => { educationHendler2("time", e.target.value) }} /></Col>
              <Col>
                <Form.Control type="text" placeholder="course" onChange={(e) => { educationHendler2("course", e.target.value) }} /></Col>
              <Col>
                <Form.Control type="text" placeholder="description" onChange={(e) => { educationHendler2("description", e.target.value) }} /></Col>

            </Row>
            <Row>
              <h5>Education 2:</h5>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="subject" onChange={(e) => { educationHendler("name", e.target.value) }} /></Col>
              <Col>
                <Form.Control type="text" placeholder="time frame" onChange={(e) => { educationHendler("time", e.target.value) }} /></Col>
              <Col>
                <Form.Control type="text" placeholder="course" onChange={(e) => { educationHendler("course", e.target.value) }} /></Col>
              <Col>
                <Form.Control type="text" placeholder="description" onChange={(e) => { educationHendler("description", e.target.value) }} /></Col>

            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>About me</Form.Label>
          <Form.Control type="text" placeholder="About me" onChange={(e) => { setFormData({ ...formData, aboutMe: e.target.value }) }} />
        </Form.Group>



        {/* <Button variant="primary" type="submit" onClick={()=>{console.log(formData);}}> */}
        <Button variant="primary" type="button" onClick={handleSubmit}>
          <Link to="/resume"> Submit</Link>
        </Button>
      </Form>
    </div>
  )
}
