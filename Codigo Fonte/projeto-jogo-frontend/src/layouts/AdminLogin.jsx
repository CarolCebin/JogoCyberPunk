import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Image from 'react-bootstrap/Image'

import AdminNavbar from "components/Navbars/AdminNavbarLogin";
import Footer from "components/Footer/Footer";

import image from "assets/img/sidebar-3.jpg";
import background from '../assets/img/fundo2.jpg'
import routes from "routeLogin.js";


class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };


  }
  

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  render() {
    return (
      <div>
        <Image src={background} fluid/>
        <div id="main-panel" className="main-panel2" ref="mainPanel">
          <AdminNavbar className="login-navbar"
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AdminLogin;
