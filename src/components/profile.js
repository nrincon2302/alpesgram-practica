import { React, useState } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Profile(props) {
    return (
        <Container className="mt-5 mx-auto align-items-center" >
        <Image
              src="https://picsum.photos/350"
              roundedCircle
              style={{ maxWidth: '100px' }}
              className='mx-auto mb-3'
              fluid
        />

       
        <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary">
          Submit
        </Button>
      </Form>
      </Container>
    );
}

export default Profile;