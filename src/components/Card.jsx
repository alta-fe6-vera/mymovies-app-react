import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col bg-orange-50 shadow-md">
        <img className="w-60 h-72" src={this.props.imageItem ? `https://image.tmdb.org/t/p/w500${this.props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={this.props.imageItem} />

        {console.log(this.props)}
        <p className="text-slate-900">{this.props.titleItem}</p>
        <p className="text-slate-900">{this.props.contentItem}</p>
        <button className="text-slate-900" onClick={this.props.onClickItem}>
          Add To Favourites
        </button>
      </div>
    );
  }
}

class Card2 extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col  bg-orange-50 shadow-md">
        <img className="w-60 h-72" src={this.props.imageItem ? `https://image.tmdb.org/t/p/w500${this.props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={this.props.imageItem} />

        {console.log(this.props)}
        <p className="text-slate-900">{this.props.titleItem}</p>
        <p className="text-slate-900">{this.props.contentItem}</p>
      </div>
    );
  }
}

export { Card, Card2 };
