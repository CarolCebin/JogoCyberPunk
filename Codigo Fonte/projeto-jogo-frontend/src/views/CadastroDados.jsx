import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";


class CadastroDados extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Label>Dados Pessoais</Form.Label>
            <br />
            <br />
            <Form.Row>
                <Col md={1}>Login</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="Login" placeholder="Login" />
                </Col>
            </Form.Row>
            <br/>
            <Form.Row>
                <Col md={1}>Senha</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="senha" placeholder="Senha" />
                </Col>
            </Form.Row>
            <br/>
            <Form.Row>
                <Col md={1}>Email</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="Email" placeholder="E-mail" />
                </Col>
            </Form.Row>
            <br/>
            <Form.Row>
                <Col md={1}>Nascimento</Col>
                <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="nascimento" placeholder="Nascimento" />
                </Col>
            </Form.Row>
            <br/>
            <Col md={{ offset: 9 }}>
            <Button variant="primary" type="submit">
              Avançar
            </Button>
            </Col>
          </Form>

        </Container>
      </div>
    );
  }
}

export default CadastroDados;
