import React from "react";
import Header from "./../Header/Header";
import Logo from "./../Header/Logo";
import HeaderLinks from "./../Header/HeaderLinks";
import Footer from "./../Footer/Footer";

const MainLayout = ({ children, props }) => {
  const { ...rest } = props;
  return (
    <React.Fragment>
      <Header
        brand={<Logo />}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
