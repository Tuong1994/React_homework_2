import React, { Component } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";

class Home extends Component {
  render() {
    let background = {
      backgroundImage: `url('./glassesImage/background.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100%",
    };
    return (
      <div style={background}>
        <Header />
        <Content />
      </div>
    );
  }
}

export default Home;
