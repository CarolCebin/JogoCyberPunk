import React, { Component } from "react";
import { Container,Button,Form,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Usuário/E-mail do Jogo" />
            </Form.Group>

            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Nav className="ml-auto">
            <NavLink
            to={"/admin/telaInicial"}>
            <Button size="lg" variant="outline-light">
              Enviar
            </Button>           
            </NavLink>
            
            <NavLink >
            <Button className="buttonCadastro" size="lg" variant="outline-light">
              Cadastrar
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
