import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <div><h1>Welcome to resume builder</h1>
    <br />
    <br />
        <Container>
      <Row>
        <Col><Login/></Col>
        <Col><Register/></Col>
      </Row>
      </Container>
        
        
        
    </div>
  )
}