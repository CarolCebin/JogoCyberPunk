import React, { Component } from "react";
import { Navbar,Image} from "react-bootstrap";
import title from '../../assets/img/Title4.png'

class AdminNavbarLogin extends Component {
  render() {
    
    return (
      <div>
        <Navbar className="navbarLogin">
          <Image src={title} className="imglogo"/>
        </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLogin;
