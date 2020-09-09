/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
const logo = require("assets/img/logo/logo.svg");
export default function Logo(props) {
  return (
    <Link to="/" style={{textAlign:'left'}}>
      <img src={logo} style={{width:'20%'}}/>
    </Link>
  );
}
