import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import quMovie from "../assets/image/qu_movie_red.png";

const CustomHeader = (props) => {
  return (
    <Box className="sticky top-0 w-full drop-shadow bg-gray-50">
      <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example">
        <div className="flex space-x-4">
          <div className="flex">
            <img src={quMovie} className="w-10 mt-2 mb-2" alt="MovieQu" />
            <p className="self-center text-red-700 font-bold ml-2 pr-8">QUMOVIE</p>
          </div>
          <div className="flex self-center">
            <Link to="/" className="ml-4 mr-4">
              <p className="font-semibold hover:text-red-700">HOME</p>
            </Link>
            <Link to="/favourites" className="ml-4 mr-4">
              <p className="font-semibold hover:text-red-700">FAVOURITES</p>
            </Link>
          </div>
        </div>
      </Tabs>
    </Box>
  );
};

export default CustomHeader; //Export Default
