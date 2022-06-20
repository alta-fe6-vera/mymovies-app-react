import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { withRouter } from "../utils/navigation"; // Import tanpa Default
import { CardFav } from "../components/Card"; // Import tanpa Default
import { Layout } from "../components/Layout"; // Import tanpa Default

import "../styles/App.css";

const Favourites = (props) => {
  const favourites = useSelector((state) => state.favourites);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className=" pl-10 pr-10 sm:pl-20 sm:pr-20 mt-10">
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2 gap-4">
          {favourites.map((item) => (
            <CardFav key={item.id} titleItem={item.title} imageItem={item.poster_path} onClickItem={() => navigate(`/movie/${item.id}`)} />
          ))}
        </div>
      </div>
      {/* <CustomFooter /> */}
    </Layout>
  );
};

export default withRouter(Favourites);
