import React from "react";
import quMovieWhite from "../assets/image/qu_movie_white.png";

const CustomFooter = (props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center w-full px-2 py-2.5 mt-10 bg-red-700">
      <div className="flex justify-center">
        <img src={quMovieWhite} className="w-10 mt-2 mb-2" alt="QuMovie" />
        <p className="self-center text-red-50 font-bold ml-2 pr-0 sm:pr-4">QUMOVIE</p>
      </div>

      <p className="self-center text-red-50 font-mono ml-2">| by Vera Soniya &copy; 2022</p>
    </div>
  );
};
export default CustomFooter; //Export Default
