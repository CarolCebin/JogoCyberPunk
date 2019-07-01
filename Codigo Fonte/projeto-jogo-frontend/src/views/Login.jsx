import React, { Component } from "react";
import { Container, Button, Form, Nav, Spinner, Col, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import firebase from 'firebase';

class Login extends Component {


  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: '',
      alert:false,
    }
    this.onChangeInput = this.onChangeInput.bind(this)

  }
  onChangeInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }


  tryLogin() {
    this.setState({ isLoading: true, message: '' })
    const { email, password } = this.state
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("telaInicial")

      })
      .catch(error => {
        this.setState({ alert:true})

      })
      .then(() => this.setState({ isLoading: false }))
  }


  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      default:
        return 'Erro desconhecido'
    }
  }

  renderMessage() {
    const { message } = this.state
    if (!message) {
      return null
    }
    return { message }

  }

  loginButton() {

    if (this.state.isLoading) {
      return <Button variant="outline-light">
        <Spinner animation="border" variant="light" />
        Loading...
             </Button>
    }
    return (
      <Button
        size="lg"
        variant="outline-light"
        onClick={() => this.tryLogin()}>
        Entrar
      </Button>
    )
  }

  render() {
    const handleDismiss = () => this.setState({ alert: false });
    const { email, password } = this.state
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Col md={{ span: 8, offset: 2 }}>
                <Form.Control
                  type="email"
                  placeholder="Usuário/E-mail do Jogo"
                  value={email}
                  onChange={value => this.onChangeInput('email', value)}
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Label></Form.Label>
              <Col md={{ span: 8, offset: 2 }}>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={value => this.onChangeInput('password', value)} />
              </Col>
            </Form.Group>
            <br />
            <Nav>
              <Col md={{ offset: 2 }}>
                {this.loginButton()}
                
              </Col>
              <Col >
                <NavLink to={"/admin/cadastro/cadastroDados"}>
                  <Button
                    className="buttonCadastro"
                    size="lg"
                    variant="outline-light"
                  >Cadastrar
                </Button>
                </NavLink>
              </Col>
              
            </Nav>
          </Form>
          <br/>
          <Alert variant="danger" show={this.state.alert} onClose={handleDismiss} dismissible>
            Login incorreto, tente outra vez!
          </Alert>
        </Container>
      </div>
    );
  }
}

export default Login;
