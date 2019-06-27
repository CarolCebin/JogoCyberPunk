import React, { Component } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";


class CadastroJogador extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkboxCheckedM:true,
      checkboxCheckedF:false,
      genero:"M"
    }
    this.handleChangeF = this.handleChangeF.bind(this)
    this.handleChangeM = this.handleChangeM.bind(this)
    
  }

  handleChangeM() {
    this.setState({
      checkboxCheckedM:true,
      checkboxCheckedF:false,
      genero:"M"

    })
  }
  handleChangeF() {
    this.setState({
      checkboxCheckedF:true,
      checkboxCheckedM:false,
      genero:"F"

    })
  }

  render() {
    const checkM = this.state.checkboxCheckedM
    const checkF = this.state.checkboxCheckedF

    return (
      
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Label>Dados Jogador</Form.Label>
            <br />
            <br />
            <Form.Row>
              <Col md={1}>Nickname</Col>
              <Col md={{ span: 5, offset: 2 }}>
                <Form.Control type="Login" placeholder="Login" />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col md={1}>Gênero</Col>
              <Col md={{ span: 5, offset: 2 }}>
                <Form>
                  {/*Peguei Código +- Pronto */}
                  {['checkbox'].map(type => (
                    <div key={`custom-inline-${type}`} className="mb-3">                      
                      <Form.Check
                        checked={checkM}
                        custom
                        inline
                        label
                        type={type}
                        id={`custom-inline-${type}-1`}
                        onChange={this.handleChangeM}
                      /><i size="lg" className={'fa fa-mars fa-3x'}></i>
                      <br/>
                      <Form.Check
                        checked={checkF}
                        custom
                        inline
                        label
                        type={type}
                        id={`custom-inline-${type}-2`}
                        onChange={this.handleChangeF}
                      /><i className={'fa fa-venus fa-3x'}></i>
                    </div>
                  ))}
                  {/* Até Aqui */}

                </Form>
                </Col>
            </Form.Row>
          <br />
          <Col md={{ offset: 9 }}>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Col>
          </Form>

        </Container>
      </div >
          );
  }
  
}


export default CadastroJogador;
