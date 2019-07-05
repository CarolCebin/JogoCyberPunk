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
  Carousel,
  Image
} from "react-bootstrap";
import espada from '../assets/img/espada.png'
import armadura from '../assets/img/armadura.png'
import cabeca from '../assets/img/cabeca.png'
import perna from '../assets/img/perna.png'
import planeta from '../assets/img/planetamorto.jpg'
import espacovazio from '../assets/img/vazioEterno.jpg'
import espaconave from '../assets/img/espaconave.jpg'

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
          <br/>
          <Row>
            
            <Col md={{ span: 1, offset: 1 }}>
              <Card style={{ width: '20em', height: '35em' }}>
                <Card.Body>
                  <Card.Title>Espaço Vazio Eterno</Card.Title>
                  <Card.Text>
                    Um espaço desconhido por ser muito perigoso, é dito que quem entra, fica preso no vazio pela eternidade!
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Image className='imgEquipamento2' src={cabeca} />
                    <Image className='imgEquipamento2' src={armadura} />
                    <Image className='imgEquipamento2' src={espada} />
                    <Image className='imgEquipamento2' src={perna} />
                      <br/>
                      <br/>                      
                    <Button block variant='outline-dark' onClick={()=>alert("Trocar")}>Trocar</Button>
                  </ListGroupItem>
                  <ListGroupItem>Dificuldade: 21%</ListGroupItem>
                  <ListGroupItem>Recompensas</ListGroupItem>
                  <ListGroupItem>
                    <p>(5000-10000) Moedas</p>
                    <p>Arma cibernética</p>
                    <p>Espada de luz</p>
                    <p>Cajado do vazio</p>
                    <Button block variant='outline-dark' onClick={()=>alert("Aventurar")}>Aventurar</Button>
                  </ListGroupItem>                  
                </ListGroup>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <img
                className="imgCarrousel"
                src={espacovazio}
                alt="First slide"
              />
            </Col>
            

            <Carousel.Caption>
              <h3 className="titleCarrousel">Espaço Vazio Eterno</h3>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <br/>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <Card style={{ width: '20em', height: '35em' }}>
                <Card.Body>
                  <Card.Title>Espaçonave Abandonada</Card.Title>
                  <Card.Text>
                    Uma espaçonave que ficou perdida no espaço por incontáveis anos, diz que nela há vários tesouros... e monstros!
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                  <Image className='imgEquipamento2' src={cabeca} />
                    <Image className='imgEquipamento2' src={armadura} />
                    <Image className='imgEquipamento2' src={espada} />
                    <Image className='imgEquipamento2' src={perna} />
                    <br/>
                    <br/>
                    <Button block variant='outline-dark' onClick={()=>alert("Trocar")}>Trocar</Button>
                  </ListGroupItem>
                  <ListGroupItem>Chance de Sucesso: 73%</ListGroupItem>
                  <ListGroupItem>Recompensas</ListGroupItem>
                  <ListGroupItem>
                    <p>(1000-3000) Moedas</p>
                    <p>Calças de diamante</p>
                    <p>Permaminho da Sabedoria</p>
                    <p>Mapa Perdido</p>
                    <Button block variant='outline-dark' onClick={()=>alert("Aventurar")}>Aventurar</Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <img
                className="imgCarrousel"
                src={espaconave}
                alt="First slide"
              />
            </Col>

            <Carousel.Caption>
              <h3 className="titleCarrousel">Espaçonave Abandonada</h3>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
        <br/>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <Card style={{ width: '20em', height: '35em' }}>
                <Card.Body>
                  <Card.Title>Planeta Perdido</Card.Title>
                  <Card.Text>
                    Um planeta que fica na região mais obscura da galáxia, já foi dado como morto, porém ainda há vários artefatos preciosos deixados para trás pelos
                    seus antigos habitantes.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Image className='imgEquipamento2' src={cabeca} />
                    <Image className='imgEquipamento2' src={armadura} />
                    <Image className='imgEquipamento2' src={espada} />
                    <Image className='imgEquipamento2' src={perna} />
                    <br/>
                    <br/>
                    <Button block variant='outline-dark' onClick={()=>alert("Trocar")}>Trocar</Button>
                  </ListGroupItem>
                  <ListGroupItem>Dificuldade: 37%</ListGroupItem>
                  <ListGroupItem>Recompensas</ListGroupItem>
                  <ListGroupItem>
                    <p>(2000-6000) Moedas</p>
                    <p>Armadura de Mithryl</p>
                    <p>Espada de luz</p>
                    <p>Núcleo do Planeta</p>
                    <Button block variant='outline-dark' onClick={()=>alert("Aventurar")}>Aventurar</Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <img
                className="imgCarrousel"
                src={planeta}
                alt="First slide"
              />
            </Col>

            <Carousel.Caption>
              <h3 className="titleCarrousel">Planeta Perdido</h3>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

      </Carousel>
    );
  }
}

export default Aventura