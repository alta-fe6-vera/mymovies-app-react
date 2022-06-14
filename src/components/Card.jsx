import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col bg-orange-800">
        <img className="w-60 h-72" src={this.props.imageItem} alt={this.props.imageItem} />

        {console.log(this.props)}
        <p className="text-slate-100">{this.props.titleItem}</p>
        <p className="text-slate-100">{this.props.contentItem}</p>
        <button className="text-slate-100" onClick={this.props.onClickItem}>
          Add To Favourites
        </button>
      </div>
    );
  }
}

class Card2 extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col bg-orange-800">
        <img className="w-60 h-72" src={this.props.imageItem} alt={this.props.imageItem} />

        {console.log(this.props)}
        <p className="text-slate-100">{this.props.titleItem}</p>
        <p className="text-slate-100">{this.props.contentItem}</p>
      </div>
    );
  }
}

export { Card, Card2 };
