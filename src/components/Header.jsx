import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { ThemeContext } from "../utils/context";

import { FaSun, FaMoon } from "react-icons/fa";
import quMovie from "../assets/image/qu_movie_red.png";
import quMovieWhite from "../assets/image/qu_movie_white.png";

const CustomHeader = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <Box className="sticky top-0 w-full drop-shadow bg-gray-50 dark:bg-red-900 flex justify-center">
      <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example" className="dark:text-red-50">
        <div className="flex space-x-4">
          <Link to="/" className="flex">
            {theme === "dark" ? <img src={quMovieWhite} className="w-10 mt-2 mb-2" alt="QuMovieWhite" /> : <img src={quMovie} className="w-10 mt-2 mb-2" alt="QuMovie" />}
            <p className="self-center dark:text-white text-red-700 font-bold ml-2 pr-8">QUMOVIE</p>
          </Link>
          <div className="flex self-center">
            <Link to="/" className="ml-4 mr-4">
              <p className="font-semibold dark:text-red-50 hover:text-red-700">HOME</p>
            </Link>
            <Link to="/favourites" className="ml-4 mr-4">
              <p className="font-semibold dark:text-red-50 hover:text-red-700">FAVOURITES</p>
            </Link>
            <Link to="/upcoming" className="ml-4 mr-4">
              <p className="font-semibold dark:text-red-50 hover:text-red-700">UPCOMING</p>
            </Link>
          </div>
        </div>
        <div className="flex self-center ml-6 mr-4">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex item-center">
              <svg className="h-4 w-4 fill-gray-50" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className="placeholder:italic dark:text-black placeholder:text-neutral-500 bg-gray-100 w-full border border-neutral-400 focus:outline-none focus:border-neutral-500 focus:ring-neutral-500 py-1 pl-4 pr-2"
              placeholder="Search Movie.."
              type="text"
              name="search"
              onKeyDown={props.onKeyDown}
            />
          </label>
        </div>
        <div className="flex self-center ml-4">
          {theme === "dark" ? <FaSun className="w-6 h-6 cursor-pointer text-red-50" onClick={() => handleThemeChange("light")} /> : <FaMoon className="w-6 h-6 cursor-pointer hover:text-red-700" onClick={() => handleThemeChange("dark")} />}
        </div>
      </Tabs>
    </Box>
  );
};

export default CustomHeader; //Export Default
