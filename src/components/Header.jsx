import React, { Component } from "react";

import dianying from "../assets/image/dianying_png.png";

class CustomHeader extends Component {
  render() {
    return (
      // <nav className="sticky top-0 w-full flex flex-col sm:flex-row sm:pl-20 sm:pr-20 px-2 py-2.5 bg-white text-orange-900 drop-shadow">
      //   <img src={dianying} className="w-16" alt="Dianying - Movies" />
      //   <p className="sm:ml-4">{this.props.title}</p>
      // </nav>
      <nav className="sticky top-0 flex sm:justify-center space-x-4 bg-white drop-shadow pt-4 pb-4">
        {[
          ["Home", "/pages/Hompage"],
          ["Favourite", "/pages/Favourites"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-orange-900 font-medium hover:bg-slate-100 hover:text-slate-900">
            {title}
          </a>
        ))}
      </nav>
    );
  }
}

export default CustomHeader;
