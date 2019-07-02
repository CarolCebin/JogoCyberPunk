import React, { Component } from "react";
import { Navbar, Button,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class AdminNavbarLinks extends Component {
  render() {

    return (
      <div>
        <Navbar bsPrefix="navbar">
          <Navbar.Brand className='logo' href="#home">{this.props.brandText} </Navbar.Brand>


          <Nav className="ml-auto">
            <NavLink to={"/admin/aventura"}><Button variant="secondary"><i className={'fa fa-user-o'}></i></Button></NavLink>
          </Nav>
          <NavLink to={"/admin/login"} >
            <Button
              variant="outline-primary"
            >Deslogar
            </Button></NavLink>
        </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLinks;
