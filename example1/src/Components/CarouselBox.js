import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forest.jpg';
import seaImg from '../assets/sea.jpg';
import meadowImg from '../assets/meadow.jpeg';



export default class CarouselBox extends Component{
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-blog w-100"
            src={ forestImg }
            alt="Forest"
            />
          <Carousel.Caption>
              <h3>Forest image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blog w-100"
            src={ seaImg }
            alt="Sea"
            />
          <Carousel.Caption>
              <h3>Sea image</h3>
              <p>lorem ipsum dollar sdfdsf fdffer, fdffgh dd trrltky</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blog w-100"
            src={ meadowImg }
            alt="Meadow"
            />
          <Carousel.Caption>
              <h3>Meadow image</h3>
              <p>lorem ipsum dollar sdfdsf fdffer, fdffgh dd trrltky</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
