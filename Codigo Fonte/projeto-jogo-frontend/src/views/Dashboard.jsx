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
              <Image src={user} />
              <Col><p className='nomeUsuario'>Jin-Woo</p></Col>
            </Col>
            <Col >
              <Card bg="light" style={{ width: '90%' }}>
                <Card.Body>
                  <Row>

                    <Col md={{ offset: 1 }}>
                      <Card.Title>
                        <a className="textoIcone">Fama</a> <i className={'fa fa-star fa-2x'}></i>
                      </Card.Title>
                      <Col><a className="textoIcone">210</a></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <a className="textoIcone">Aventureiro</a> <i className={'fa fa-street-view fa-2x'}></i>
                      </Card.Title>
                      <Col md={{ offset: 1 }}><a className="textoIcone">102</a></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <a className="textoIcone">Mercante</a> <i className={'fa fa-money fa-2x'}></i>
                      </Card.Title>
                      <Col md={{ offset: 1 }}><a className="textoIcone">35</a></Col>
                    </Col>

                    <Col>
                      <Card.Title>
                        <a className="textoIcone">Criador</a> <i className={'fa fa-flask fa-2x'}></i>
                      </Card.Title>
                      <Col md={{ offset: 1 }}><a className="textoIcone">73</a></Col>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <br />

              <Card bg="light" style={{ width: '90%' }}>
                <Card.Header><a className="textoIcone">Equipamentos</a></Card.Header>
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
                <Card.Header><i className={'fa fa-bitcoin fa-2x'}></i><a className="textoIcone">Dinheiro</a> </Card.Header>
                <Card.Body>
                  <Col>
                  <Card.Title><a className="textoIcone">123454321</a></Card.Title>
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
