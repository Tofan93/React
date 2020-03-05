import React, { Component } from 'react';
import { Media, Container, Col, Row, Card, ListGroup } from "react-bootstrap"

export default class Blog extends Component{
  render () {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://smartprogress.do/uploadImages/001170890.jpg"
                />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna et pulvinar scelerisque. Praesent in pellentesque risus. Fusce facilisis arcu id pretium tincidunt. Proin eu tempus sem. Donec leo.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://smartprogress.do/uploadImages/001170890.jpg"
                />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna et pulvinar scelerisque. Praesent in pellentesque risus. Fusce facilisis arcu id pretium tincidunt. Proin eu tempus sem. Donec leo.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://smartprogress.do/uploadImages/001170890.jpg"
                />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna et pulvinar scelerisque. Praesent in pellentesque risus. Fusce facilisis arcu id pretium tincidunt. Proin eu tempus sem. Donec leo.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://smartprogress.do/uploadImages/001170890.jpg"
                />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna et pulvinar scelerisque. Praesent in pellentesque risus. Fusce facilisis arcu id pretium tincidunt. Proin eu tempus sem. Donec leo.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C#</ListGroup.Item>
          </ListGroup>
            </Card>
            <Card className="mt-3" bg="warning">
              <Card.Body>
                <Card.Title>
                  Side widget
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna et pulvinar scelerisque.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
