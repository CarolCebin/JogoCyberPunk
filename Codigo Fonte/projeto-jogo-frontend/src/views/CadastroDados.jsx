import React, { Component } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import firebase from 'firebase'
import userPadrao from '../assets/img/default-avatar.png'

class CadastroDados extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      nascimento: '',
      message: '',
      userId: 0,
      imageUrl: userPadrao,
    }
    this.onChangeInput = this.onChangeInput.bind(this)
  }
  onChangeInput(field, e) {
    this.setState({
      [field]: e.target.value

    })
  }

  tryAvance() {
    console.log(this.state.email)
    const { email, password, nascimento, imageUrl } = this.state
    this.tryCreate(email, password,nascimento)
      .then(() => this.writeUserData(email, nascimento, imageUrl)
        .then(() => this.props.history.push("cadastroJogador")))

  }

  tryCreate(email, password,nascimento) {
    if(nascimento !== ""){
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          throw error
        });
    }
  }

  writeUserData(email, nascimento, imageUrl) {
    let db = firebase.firestore()
    return db.collection("Usuarios").doc().set({
      email: email,
      nascimento: nascimento,
      imageUrl: imageUrl
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }

  render() {
    const database = firebase.firestore()
    const { email, password, nascimento, userId, imageUrl } = this.state
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Label><p className="corBranca">Dados Pessoais</p></Form.Label>
            <br />
            <br />
            <Form.Group>
              <Form.Row>
                <Col md={1}><p className="corBranca">Email</p></Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <Form.Control type="email" placeholder="E-mail"
                    value={email}
                    onChange={value => this.onChangeInput('email', value)} />
                </Col>
              </Form.Row>
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Row>
                <Col md={1}><p className="corBranca">Senha</p></Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <Form.Control type="password" placeholder="Senha"
                    value={password}
                    onChange={value => this.onChangeInput('password', value)} />
                </Col>
              </Form.Row>
            </Form.Group>
            <br />

            <Form.Row>
              <Col md={1}><p className="corBranca">Nascimento</p></Col>
              <Col md={{ span: 3, offset: 2 }}>
                <Form.Control type="date" placeholder="Nascimento"
                  value={nascimento}
                  onChange={value => this.onChangeInput('nascimento', value)} />
              </Col>
            </Form.Row>
            <br />
            <Row>
              <Col md={{ offset: 2 }}>
                <NavLink to={"/admin/login"}>
                  <Button variant="primary" type="submit">
                    Voltar
              </Button>
                </NavLink>
              </Col>
              <Col md={{ offset: 2 }}>
                <Button variant="primary" type="submit"
                  onClick={() => this.tryAvance()}>
                  Avançar
                </Button>
              </Col>
            </Row>
          </Form>

        </Container>
      </div>
    );
  }
}

export default CadastroDados;
