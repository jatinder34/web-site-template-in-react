import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Header from "./../Header/Header";
import Logo from "./../Header/Logo";
import HeaderLinks from "./../Header/HeaderLinks";
import Footer from "./../Footer/Footer";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg3.jpg";

const useStyles = makeStyles(styles);
const LoginLayout = ({ children, props }) => {
    const classes = useStyles();
     const { ...rest } = props;
  return (
    <React.Fragment>
      <Header
        brand={<Logo />}
        absolute
        color="transparent"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {children}
        <Footer whiteFont />
      </div>
    </React.Fragment>
  );
};

export default LoginLayout;
