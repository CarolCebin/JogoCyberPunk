import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <Navbar className="footer">
                         
          <p className="copyright ml-auto">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.creative-tim.com?ref=lbr-footer">
              CyperPunk3003
            </a>
            , made with love for a better web
          </p>
          </Navbar>
      </footer>
    );
  }
}

export default Footer;
