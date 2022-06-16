import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="p-3 grow flex flex-col shadow-md bg-red-50 justify-between">
        <div className="mb-4 align-middle">
          <img className="w-full" src={this.props.imageItem ? `https://image.tmdb.org/t/p/w500${this.props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={this.props.imageItem} />
          <button className="w-full text-red-50 bg-red-500 hover:bg-red-700 pt-2 pb-2 mr-1 justify-center " onClick={this.props.onClickItem}>
            See Details
          </button>

          {console.log(this.props)}
          <p className="text-slate-900 font-semibold mt-2 ">{this.props.titleItem}</p>
        </div>
        <div className="">
          <button className="w-full text-red-50 bg-red-700 pt-2 pb-2 rounded-t rounded-b ml-1 hover:opacity-80" onClick={this.props.onClickItem}>
            Add to Favourites
          </button>
        </div>
      </div>
    );
  }
}

class Card2 extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col shadow-md bg-red-50">
        <img className="w-full" src={this.props.imageItem ? `https://image.tmdb.org/t/p/w500${this.props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={this.props.imageItem} />

        {console.log(this.props)}
        <p className="text-slate-900  font-semibold mt-2">{this.props.titleItem}</p>
        <p className="text-slate-900">{this.props.contentItem}</p>
      </div>
    );
  }
}

export { Card, Card2 };
