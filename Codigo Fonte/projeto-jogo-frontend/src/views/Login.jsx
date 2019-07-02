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
      alert: false,
    }
    this.onChangeInput = this.onChangeInput.bind(this)
    this.tryLoginGoogle = this.tryLoginGoogle.bind(this)
    console.log(props)

  }
  onChangeInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  tryLoginGoogle() {
    // Using a popup.
    let props = this.props
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider)
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      props.history.push("telaInicial")
    });
    
  }

  tryLogin() {
    this.setState({ isLoading: true, message: '' })
    console.log(this.props)
    const { email, password } = this.state
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("telaInicial")
      })
      .catch(error => {
        this.setState({ alert: true })

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
          <br />
          <Col md={{ offset: 2 , span:8}}>
          <Button block variant='outline-danger' onClick={this.tryLoginGoogle}>
            <i className={'fa fa-google fa-2x'}></i>          
          </Button>
          </Col>
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
