import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";


class CadastroJogador extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkboxCheckedM:true,
      checkboxCheckedF:false,
      genero:true
    }
    this.handleChangeF = this.handleChangeF.bind(this)
    this.handleChangeM = this.handleChangeM.bind(this)
    
  }

  handleChangeM() {
    this.setState({
      checkboxCheckedM:true,
      checkboxCheckedF:false,
      genero:true

    })
  }
  handleChangeF() {
    this.setState({
      checkboxCheckedF:true,
      checkboxCheckedM:false,
      genero:false

    })
  }

  render() {
    const checkM = this.state.checkboxCheckedM
    const checkF = this.state.checkboxCheckedF

    return (
      
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Label><p className="corBranca">Dados Jogador</p></Form.Label>
            <br />
            <br />
            <Form.Row>
              <Col md={1}><p className="corBranca">Nickname</p></Col>
              <Col md={{ span: 6, offset: 2 }}>
                <Form.Control type="Login" placeholder="Nickname" />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col md={1}><p className="corBranca">Gênero</p></Col>
              <Col md={{ span: 4, offset: 2 }}>
                <Form>
                  {/*Peguei Código +- Pronto */}
                  {['checkbox'].map(type => (
                    <div key={`custom-inline-${type}`} className="mb-3">
                      <Form.Row> 
                      <Col md={{ span: 4, offset: 2 }}>                    
                      <Form.Check
                        checked={checkM}
                        custom
                        inline
                        label
                        type={type}
                        id={`custom-inline-${type}-1`}
                        onChange={this.handleChangeM}/>                      
                      <i size="lg" className={'fa fa-mars fa-3x'} ></i>
                      </Col>
                                           
                      <br/>
                      <Col md={{ span: 4, offset: 2 }}>
                      <Form.Check
                        checked={checkF}
                        custom
                        inline
                        label
                        type={type}
                        id={`custom-inline-${type}-2`}
                        onChange={this.handleChangeF}
                      /><i className={'fa fa-venus fa-3x'}></i>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                    <Col md={{ span: 1, offset: 3 }}>
                    <p className="corBranca">Masculino</p>
                    </Col>
                    <Col md={{ span: 1, offset: 5 }}>
                    <p className="corBranca">Feminino</p>
                    </Col>
                    </Form.Row>
                    </div>
                  ))}
                  {/* Até Aqui */}

                </Form>
                </Col>
            </Form.Row>
          <br />
          <Col md={{ offset: 9 }}>
            
          <NavLink to={"/admin/login"}>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </NavLink>
          </Col>
          </Form>

        </Container>
      </div >
          );
  }
  
}


export default CadastroJogador;
