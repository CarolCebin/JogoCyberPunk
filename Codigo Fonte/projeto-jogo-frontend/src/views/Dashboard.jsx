import React, { Component } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import user from '../assets/img/jinWoo.jpg'



class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Container fluid>

          <Row>
            <Col md={{ span:2}}>
              <Image className='imgUsuario' src={user} />
              <Col><p className='nomeUsuario'>Jin-Woo</p></Col>
            </Col>
            <Col md={{ offset: 1 }}>
              <Card bg="light" style={{ width: '90%' }}>
                <Card.Body>
                  <Row>

                    <Col md={{ offset: 1 }}>
                      <Card.Title>
                        <p className="textoIcone">Fama  <i className={'fa fa-star fa-2x'}></i></p>
                      </Card.Title>
                      <Col><p className="textoIcone">210</p></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <p className="textoIcone">Aventureiro <i className={'fa fa-street-view fa-2x'}></i></p> 
                      </Card.Title>
                      <Col md={{ offset: 1 }}><p className="textoIcone">102</p></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <p className="textoIcone">Mercante <i className={'fa fa-money fa-2x'}></i></p>
                      </Card.Title>
                      <Col md={{ offset: 1 }}><p className="textoIcone">35</p></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <p className="textoIcone">Criador <i className={'fa fa-flask fa-2x'}></i></p> 
                      </Card.Title>
                      <Col md={{ offset: 1 }}><p className="textoIcone">73</p></Col>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <br />

              <Card bg="light" style={{ width: '90%' }}>
                <Card.Header><p className="textoIcone">Equipamentos</p></Card.Header>
                <Card.Body>
                  <Row>

                    <Col md={{ offset: 1 }}>
                      Teste
                    </Col>

                    <Col>
                      Teste
                    </Col>

                    <Col>
                      Teste
                    </Col>

                    <Col>
                      Teste
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <br />

              <Card bg="light" style={{ width: '90%' }}>
                <Card.Header><p className="textoIcone"><i className={'fa fa-bitcoin fa-2x'}></i> &nbsp;&nbsp; Dinheiro</p> </Card.Header>
                <Card.Body>
                  <Col>
                  <Card.Title><p className="textoIcone">123454321</p></Card.Title>
                  </Col>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
