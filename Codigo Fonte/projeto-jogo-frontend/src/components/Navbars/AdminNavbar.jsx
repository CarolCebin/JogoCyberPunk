import React, { Component } from "react";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

class Header extends Component {
 
  render() {
    return (         
      <AdminNavbarLinks {...this.props} />      
    )
  }
}

export default Header;
