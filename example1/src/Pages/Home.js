import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from "react-bootstrap"

export default class Home extends Component{
  render () {
    return (
      <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <CardDeck className="m-4">
          <Card bg="warning">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nisi, blandit.</Card.Text>
              <Button variant="primary" href="/about">About team</Button>
          </Card.Body>
        </Card>
        <Card bg="info">
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nisi, blandit.</Card.Text>
            <Button variant="primary" href="/about">About team</Button>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </Card>
      <Card bg="success">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nisi, blandit.</Card.Text>
          <Button variant="primary" href="/about">About team</Button>
      </Card.Body>
    </Card>
        </CardDeck>
    </Container>
      </>
    )
  }
}
