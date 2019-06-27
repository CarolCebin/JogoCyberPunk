import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import TodoList from '../components/todo/todoList.jsx'

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
            <Col >
            <Card
                title="Perfil do Usuário"
                category="usuário"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                    </table>
                  </div>
                }
              />
            </Col>
            
          </Row>
          <Row>
            <Col>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Agendamento"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <TodoList/>  
                }
              />
            </Col>
            
          </Row>

          <Row>
            <Col>
              <Card
                title="Controle"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
