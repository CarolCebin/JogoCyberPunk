import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
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
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <Card style={{ width: '20em', height: '35em' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Col md={{offset: 3 }}>
                    <Card.Link href="/dungeon">Another Link</Card.Link>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <img
                className="imgCarrousel"
                src={background}
                alt="First slide"
              />
            </Col>
            

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <Card style={{ width: '20em', height: '35em' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Col md={{offset: 3 }}>
                    <Card.Link href="/dungeon">Another Link</Card.Link>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <img
                className="imgCarrousel"
                src={background}
                alt="First slide"
              />
            </Col>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <Card style={{ width: '20em', height: '35em' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Col md={{offset: 3 }}>
                    <Card.Link href="/dungeon">Another Link</Card.Link>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <img
                className="imgCarrousel"
                src={background}
                alt="First slide"
              />
            </Col>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

      </Carousel>
    );
  }
}

export default Aventura