import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";


class CadastroDados extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Label>Dados Pessoais</Form.Label>
            <br />
            <br />
            <Form.Group>
            <Form.Row>
                <Col md={1}>Login</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control placeholder="Login" />
                </Col>
            </Form.Row>
            </Form.Group>

            <br/>
            <Form.Group>
            <Form.Row>
                <Col md={1}>Senha</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="password" placeholder="Senha" />
                </Col>
            </Form.Row>
            </Form.Group>
            <br/>
            <Form.Group>
            <Form.Row>
                <Col md={1}>Email</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="email" placeholder="E-mail" />
                </Col>
            </Form.Row>
            </Form.Group>
            <br/>
            <Form.Row>
                <Col md={1}>Nascimento</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="date" placeholder="Nascimento" />
                </Col>
            </Form.Row>
            <br/>
            <Col md={{ offset: 9 }}>
            <NavLink to={"/admin/cadastro/cadastroJogador"}>
              <Button variant="primary" type="submit">
                Avançar
              </Button>
            </NavLink>
            </Col>
          </Form>

        </Container>
      </div>
    );
  }
}

export default CadastroDados;
