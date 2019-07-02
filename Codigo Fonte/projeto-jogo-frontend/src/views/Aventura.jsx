import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  FormControl,
  Button,
  Carousel
} from "react-bootstrap";


import background from '../assets/img/fundo2.jpg'


class Aventura extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        
        <Carousel.Item>
          <Row >
          <Col md={{offset: 0,span:3 }}>
            VAI SE FUDER AKOPAKOPAKPOKAPAKAOPKAOPKAOPKAOPKAOPKAOPKAOPKAOPAKOPAKOPAKOPAKOPKAOPS
          </Col>
          <Col md={{offset: 4 }}>
            <img
              className="imgCarrousel"
              src={background}
              alt="First slide"
            />
          </Col>
          </Row>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Col md={{offset: 4 }}>
          <img
            className="imgCarrousel"
            src={background}
            alt="Third slide"
          />
          </Col>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <Col md={{offset: 4 }}>
            <img
              className="imgCarrousel"
              src={background}
              alt="Third slide"
              max-width= '200' 
            />
          </Col>
          
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
}

export default Aventura