import { React } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';

function User(props) {

    return (
      <Container className="mx-auto" style={{ maxWidth: '600px' }}>
        <Row className="align-items-center mb-5 mt-5">
          <Col xs={3}>
          <Link to="/profile">
            <Image
              src="https://picsum.photos/350"
              roundedCircle
              fluid
            />
          </Link>
          </Col>
          <Col xs={9}>
            <h2>{props.usuario.username}</h2>
            <p>
              <strong>{props.usuario.fullname}</strong> {props.usuario.description}
            </p>
            <a href={props.usuario.url} target="_blank" rel="noopener noreferrer">{props.usuario.url}</a>
            <Row className="mt-2">
              <Col>
                <strong>{props.usuario.posts}</strong> posts
              </Col>
              <Col>
                <strong>{props.usuario.followers}</strong> followers
              </Col>
              <Col>
                <strong>{props.usuario.following}</strong> following
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
    }

export default User;