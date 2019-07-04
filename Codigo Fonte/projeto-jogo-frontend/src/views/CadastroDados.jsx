import React, { Component } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import firebase from 'firebase'
import userPadrao from '../assets/img/default-avatar.png'

class CadastroDados extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      nascimento: '',
      message: '',
      imageUrl: userPadrao,
      titulo: 'Pessoais',
      pagina: 0,
      checkM:true,
      checkF:false,
      genero:true,
      nickname:'',
    }
    this.handleChangeF = this.handleChangeF.bind(this)
    this.handleChangeM = this.handleChangeM.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  handleChangeM() {
    this.setState({
      checkM: true,
      checkF: false,
      genero: true

    })
  }

  handleChangeF() {
    this.setState({
      checkF: true,
      checkM: false,
      genero: false

    })
  }

  onChangeInput(field, e) {
    this.setState({
      [field]: e.target.value

    })
  }

  tryAvance() {
    this.setState({      
      pagina:1
    })
  }

  tryVoltar(){
    this.setState({      
      pagina:0
    })
  }
  
  tryCreate(email,password,nascimento,imageUrl,nickname,genero) {

    if(this.state.nascimento){
      
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response=>{
          
          this.tryCadastro(email,nascimento,imageUrl,nickname,genero)
            
          return response  
        })
    }

    throw "Erro ao tentar criar registro!";
  }

  tryCadastro(email, nascimento, imageUrl,nickname,genero) {
    
    let db = firebase.firestore()
    return db.collection("Usuarios").doc().set({
      email: email,
      nascimento: nascimento,
      imageUrl: imageUrl,
      genero: genero===true ? 'Masculino' : 'Feminino',
      nickname: nickname
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }

  render() {
    const { email, password, nascimento, imageUrl,titulo,pagina,genero,nickname,checkM,checkF } = this.state
      switch(pagina){
        case 0:
          return(
            <div className="content">
            <Container fluid>
              <Form onSubmit={(evt) => evt.preventDefault()}>
                <Form.Label><p className="corBranca">Dados {titulo}</p></Form.Label>
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
        )

        case 1:
          return(
            <div className="content">
            <Container fluid>
              <Form onSubmit={(evt) => evt.preventDefault()}>
                <Form.Label><p className="corBranca">Dados Jogador</p></Form.Label>
                <br />
                <br />
                <Form.Row>
                  <Col md={1}><p className="corBranca">Nickname</p></Col>
                  <Col md={{ span: 6, offset: 2 }}>
                    <Form.Control type="Login" placeholder="Nickname" 
                    value={nickname} onChange={value => this.onChangeInput('nickname', value)} />/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Col md={1}><p className="corBranca">Gênero</p></Col>
                  <Col md={{ span: 4, offset: 2 }}>
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
                                onChange={this.handleChangeM} />
                              <i size="lg" className={'fa fa-mars fa-3x'} ></i>
                            </Col>
    
                            <br />
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
                  </Col>
                </Form.Row>
                <br />
                <Row>
                  <Col md={{ offset: 2 }}>
                      <Button variant="primary" type="submit"
                        onClick={()=>this.tryVoltar()}>
                        Voltar
                      </Button>
                  </Col>
                  <Col md={{ offset: 2 }}>
                    <Button variant="primary" type="submit"
                      onClick={() => this.tryCreate(email,password, nascimento, imageUrl,nickname,genero)}>
                      Cadastrar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div >
        );
      }


      
  }

}

export default CadastroDados;
