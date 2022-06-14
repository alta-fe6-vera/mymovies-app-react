import React, { Component } from "react";
import dianying from "../assets/image/dianying_png_white.png";

class CustomHeader extends Component {
  render() {
    return (
      <nav className="sticky top-0 row-auto px-2 py-2.5 bg-orange-800 pl-20 pr-20">
        <img src={dianying} alt="" className="w-16" />
        <p className="text-slate-100">{this.props.title}</p>
      </nav>
    );
  }
}

export default CustomHeader;
