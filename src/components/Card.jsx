import React from "react";

const Card = (props) => {
  return (
    <div className="p-3 grow flex flex-col shadow-md bg-red-100 dark:bg-neutral-600 justify-between">
      <div className="mb-4 align-middle">
        <img className="w-full" src={props.imageItem ? `https://image.tmdb.org/t/p/w500${props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={props.imageItem} />
        <button className="w-full text-red-50 bg-red-500 hover:bg-red-700 pt-2 pb-2 mr-1 justify-center " onClick={props.onClickItem}>
          See Details
        </button>
        <p className="text-slate-900 dark:text-red-50 font-semibold mt-2">{props.titleItem}</p>
      </div>
      <div className="">
        <button className="w-full text-red-50 bg-red-700 pt-2 pb-2 rounded-t rounded-b ml-1 hover:opacity-80" onClick={props.onClickFav}>
          Add to Favourites
        </button>
      </div>
    </div>
  );
};
const CardFav = (props) => {
  return (
    <div className="p-3 grow flex flex-col shadow-md bg-red-100 dark:bg-neutral-600 justify-between">
      <div className="mb-4 align-middle">
        <img className="w-full" src={props.imageItem ? `https://image.tmdb.org/t/p/w500${props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={props.imageItem} />
        <p className="text-slate-900 dark:text-red-50 font-semibold mt-2">{props.titleItem}</p>
      </div>
      <div className="">
        <button className="w-full text-red-50 bg-red-700 pt-2 pb-2 rounded-t rounded-b ml-1 hover:opacity-80" onClick={props.onClickItem}>
          See Details
        </button>
      </div>
    </div>
  );
};

export { Card, CardFav }; // Export tanpa
