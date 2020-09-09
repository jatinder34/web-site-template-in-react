import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/Home/HomePage";
// Layouts
import LoginLayout from ".//components/Layouts/LoginLayout";
import MainLayout from ".//components/Layouts/MainLayout";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <AppRoute layout={MainLayout} path="/contact" component={LandingPage} />
      <AppRoute layout={MainLayout} path="/about" component={ProfilePage} />
      <AppRoute layout={LoginLayout} path="/login" component={LoginPage} />
      <AppRoute layout={MainLayout} path="/components" component={Components} />
      <AppRoute layout={MainLayout} path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
