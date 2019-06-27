import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";
import AdminLoginLayout from "layouts/AdminLogin.jsx";




const config = {
  apiKey: "AIzaSyDQ0zvCu4x0PcaOEXi8O8tJL_jKw_06Aj4",
  authDomain: "poo2-243713.firebaseapp.com",
  databaseURL: "https://poo2-243713.firebaseio.com",
  projectId: "poo2-243713",
  storageBucket: "poo2-243713.appspot.com",
  messagingSenderId: "1027903864914",
  appId: "1:1027903864914:web:68aa769d653e2324"

}
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/admin/login" render={props => <AdminLoginLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      
      <Redirect from="/" to="/admin/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
