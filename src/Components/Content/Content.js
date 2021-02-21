import React, { Component } from "react";
import Glasses from "../Glasses/Glasses";

class Content extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    InfoGlass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlass = () => {
    return this.arrGlasses.map((gl, index) => {
      return (
        <div key={index} className="col-2">
          <Glasses items={gl} change={this.renderInfo} />
        </div>
      );
    });
  };

  renderInfo = (glass) => {
    console.log(glass);
    this.setState({
      InfoGlass: glass,
    });
  };

  render() {
    let position = {
      position: "absolute",
      top: "25%",
      left: "25%",
      width: "50%",
      zIndex: 100,
    };

    let { id, price, name, url, desc } = this.state.InfoGlass;

    return (
      <div className="container">
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-3" style={{ position: "relative" }}>
            <img
              className="border border-dark"
              src={"./glassesImage/model.jpg"}
              alt={"./glassesImage/model.jpg"}
              style={{ width: "100%" }}
            />
            <div style={position}>
              <img src={url} alt={url} style={{ width: "100%" }} />
            </div>
          </div>
          <div className="card text-left text-white col-6 bg-secondary">
            <div className="card-body">
              <h4 className="card-title">Tên : {name}</h4>
              <p className="card-text">Mã sản phẩm : {id} </p>
              <p className="card-text">Giá : {price}</p>
              <p className="card-text">Mô tả : {desc}</p>
            </div>
          </div>
        </div>
        <div className="row d-flex p-4 mb-4" style={{background: 'rgba(0,0,0,0.5)'}}>{this.renderGlass()}</div>
      </div>
    );
  }
}

export default Content;
