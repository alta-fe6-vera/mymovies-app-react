import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import axios from "axios";

import { withRouter } from "../utils/navigation";
import { Card } from "../components/Card";
import Layout from "../components/Layout";

import CinemaLoading from "../assets/animations/loading_anm.json";
import movieQu from "../assets/image/movie_qu_red.png";

import "../styles/App.css";

const Homepage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchMoviePlay();
  }, []);

  function fetchMoviePlay() {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=29737ad1a86c54f369b7f540ef2296fa&language=en-US&page=1")
      .then((res) => {
        const { results } = res.data;
        setData(results);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  }

  function fetchMoreMovie() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const newPage = page + 1;
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=29737ad1a86c54f369b7f540ef2296fa&language=en-US&page=${page}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        const { results } = res;
        const temp = data.slice();
        temp.push(...results);
        setData(temp);
        setPage(newPage);
      })
      .catch((err) => alert(err.toString()));
  }

  // const handleClickDetail = (item) => {
  //   const temp = this.state.dataMovie.slice();
  //   temp.push(item);
  //   setDataMovie(temp),
  //     () => {
  //       // setTitle(item.title);
  //       this.fetchData();
  //     };
  // };

  if (loading) {
    return (
      <div className="flex flex-col justify-center h-full">
        <Lottie loop autoplay animationData={CinemaLoading} className="w-72" />
      </div>
    );
  } else {
    return (
      <Layout>
        <div className=" pl-10 pr-10 sm:pl-20 sm:pr-20 mt-10">
          <div className="flex justify-around mb-10 ">
            <img src={movieQu} alt="" className="w-1/4" /> <h1>Movie Qu</h1>
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2 gap-4">
            {data.map((item) => (
              <Card key={item.id} titleItem={item.title} imageItem={item.poster_path} onClickItem={() => navigate(`/movie/${item.id}`)} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="w-56 text-red-50 bg-red-700 pt-2 pb-2 rounded-t rounded-b ml-1 mt-4 mb-4 hover:opacity-80" onClick={() => fetchMoreMovie()}>
              More Movie
            </button>
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Homepage);
