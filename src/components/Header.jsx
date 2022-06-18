import React from "react";
import { Link } from "react-router-dom";

import quMovie from "../assets/image/qu_movie_red.png";

const CustomHeader = (props) => {
  return (
    <nav className="sticky top-0 w-full flex justify-around space-x-8 drop-shadow px-2 py-2.5 bg-white text-red-700 font-bold">
      <div className="flex justify-center space-x-4">
        <img src={quMovie} className="w-10" alt="MovieQu" />
        <p className="self-center">QuMovie</p>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="flex flex-col justify-center">
          <p>HOME</p>
        </Link>
        <Link to="/movie" className="flex flex-col justify-center">
          <p>DETAIL</p>
        </Link>
        {/* <Link className="flex flex-col justify-center">
          <p>FAVOURITE</p>
        </Link> */}
      </div>
    </nav>
    // </nav>
  );
};

export default CustomHeader; //Export Default
