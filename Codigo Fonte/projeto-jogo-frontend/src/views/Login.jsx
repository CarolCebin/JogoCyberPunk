import React, { Component } from "react";
import { Container, Button, Form, Nav,Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import firebase from 'firebase';

class Login extends Component {


  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading:false,
    }
    this.onChangeInput = this.onChangeInput.bind(this)
  }
  onChangeInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }


  tryLogin() {
    this.setState({isLoading:true})
    const { email, password } = this.state
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => (
        console.log('usuario autenticado', user)
      ))
      .catch(error => {
        console.log(error)
      })
      .then(()=>this.setState({isLoading:false}))
  }

  loginButton() {
    
    if(this.state.isLoading){
      return <Button variant="outline-light">
                <Spinner animation="border" variant="light"/>
                Loading...
             </Button>
    }
    return (
      <Button
        size="lg"
        variant="outline-light"
        onClick={() => this.tryLogin()}>
        Enviar
      </Button>
    )
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Usuário/E-mail do Jogo"
                value={email}
                onChange={value => this.onChangeInput('email', value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                value={password}
                onChange={value => this.onChangeInput('password', value)} />
            </Form.Group>
            <Nav className="ml-auto">
              <NavLink
                to={"/admin/telaInicial"}>
                {this.loginButton()}
              </NavLink>

              <NavLink to={"/admin/cadastro/cadastroDados"}>
                <Button
                  className="buttonCadastro"
                  size="lg"
                  variant="outline-light"
                >Cadastrar
                </Button>
              </NavLink>
            </Nav>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Login;
