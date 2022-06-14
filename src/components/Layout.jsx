import React, { Component } from "react";
import CustomHeader from "./Header";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen flex flex-col overflow-auto">
        <CustomHeader title={this.props.title} />
        <div className="h-full w-full">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
