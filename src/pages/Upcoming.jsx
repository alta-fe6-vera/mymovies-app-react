import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "../utils/navigation";
import { Card } from "../components/Card"; // Import tanpa Default
import { Layout } from "../components/Layout"; // Import tanpa Default
import { reduxAction } from "../utils/redux/actions/action";
import quMovie from "../assets/image/qu_movie_red.png";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../styles/App.css";

const Upcoming = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchMovieUpcoming();
  }, []);

  function fetchMovieUpcoming() {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
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
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`, requestOptions)
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

  function handleSearch(event) {
    if (event.keyCode === 13) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${event.target.value}&page=1&include_adult=false`)
        .then((res) => {
          const { results } = res.data;
          setData(results);
        })
        .catch((err) => alert(err.toString()));
    }
  }

  function handleFav(item) {
    const tempLocal = localStorage.getItem("favMovie");
    if (tempLocal) {
      const temp = JSON.parse(tempLocal);
      if (temp.find((x) => x.id === item.id)) {
        alert("The Movies is Already");
      } else {
        temp.push(item);
        localStorage.setItem("favMovie", JSON.stringify(temp));
        dispatch(reduxAction("SET_FAVOURITES", temp));
        alert("Added to Favourites");
      }
    } else {
      localStorage.setItem("favMovie", JSON.stringify([item]));
      dispatch(reduxAction("SET_FAVOURITES", [item]));
      alert("Added to Favourites");
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center content-center">
        <div className="flex flex-col h-screen justify-center ">
          <img src={quMovie} alt="" className="w-full animate-pulse" />
        </div>
      </div>
    );
  } else {
    return (
      <Layout onKeyDown={(event) => handleSearch(event)}>
        <div className=" pl-10 pr-10 sm:pl-20 sm:pr-20 mt-10">
          <div className="flex justify-around mb-10 text-black dark:text-red-50 text-2xl lg:text-4xl">Upcoming Movies</div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2 gap-4">
            {data.map((item) => (
              <Card key={item.id} titleItem={item.title} imageItem={item.poster_path} onClickItem={() => navigate(`/movie/${item.id}`)} onClickFav={() => handleFav(item)} item={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="w-56 text-red-50 bg-red-700 pt-2 pb-2 rounded-t rounded-b ml-1 mt-4 mb-4 hover:opacity-80" onClick={() => fetchMoreMovie()}>
              More Movie
            </button>
          </div>
        </div>
        {/* <CustomFooter /> */}
      </Layout>
    );
  }
};

export default withRouter(Upcoming);
