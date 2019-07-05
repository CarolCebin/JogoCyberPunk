import React, { Component } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import user from '../assets/img/jinWoo.jpg'
import espada from '../assets/img/espada.png'
import armadura from '../assets/img/armadura.png'
import cabeca from '../assets/img/cabeca.png'
import perna from '../assets/img/perna.png'


import firebase from 'firebase'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      nascimento: '',
      message: '',
      imageUrl: '',
      pagina: 0,
      checkM:true,
      checkF:false,
      genero:true,
      nickname:'',
    }
  }

  preencheDados(){
    const db = firebase.firestore()
    db.collection("Usuarios").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().email}`);
      });
  });
  
  }



  render() {  
    this.preencheDados()
    return (
      <div className="content">
        <Container fluid>

          <Row>
            <Col md={{ span:2}}>
              <Image className='imgUsuario' src={user} />
              <Col><p className='nomeUsuario'>Jin-Woo</p></Col>
            </Col>
            <Col md={{ offset: 1 }}>
              <Card bg="light" style={{ width: '90%' }}>
                <Card.Body>
                  <Row>

                    <Col md={{ offset: 1 }}>
                      <Card.Title>
                        <p className="textoIcone">Fama  <i className={'fa fa-star fa-2x'}></i></p>
                      </Card.Title>
                      <Col><p className="textoIcone">210</p></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <p className="textoIcone">Aventureiro <i className={'fa fa-street-view fa-2x'}></i></p> 
                      </Card.Title>
                      <Col md={{ offset: 1 }}><p className="textoIcone">102</p></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <p className="textoIcone">Mercante <i className={'fa fa-money fa-2x'}></i></p>
                      </Card.Title>
                      <Col md={{ offset: 1 }}><p className="textoIcone">35</p></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <p className="textoIcone">Criador <i className={'fa fa-flask fa-2x'}></i></p> 
                      </Card.Title>
                      <Col md={{ offset: 1 }}><p className="textoIcone">73</p></Col>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <br />

              <Card bg="light" style={{ width: '90%' }}>
                <Card.Header><p className="textoIcone">Equipamentos</p></Card.Header>
                <Card.Body>
                  <Row>

                    <Col md={{ offset: 1 }}>
                      <Image className='imgEquipamento' src={cabeca} />
                    </Col>

                    <Col>
                      <Image className='imgEquipamento' src={armadura} />
                    </Col>

                    <Col>
                      <Image className='imgEquipamento' src={espada} />
                    </Col>

                    <Col>
                      <Image className='imgEquipamento' src={perna} />
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <br />

              <Card bg="light" style={{ width: '90%' }}>
                <Card.Header><p className="textoIcone"><i className={'fa fa-bitcoin fa-2x'}></i> &nbsp;&nbsp; Dinheiro</p> </Card.Header>
                <Card.Body>
                  <Col>
                  <Card.Title><p className="textoIcone">123454321</p></Card.Title>
                  </Col>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard
