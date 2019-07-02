import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Todo from "../components/todo/todo"

class Dungeon extends Component {
  render() {
    return (
      <div>
        <Container fluid>
         <Todo/>
        </Container>
      </div>
    );
  }
}

export default Dungeon;
