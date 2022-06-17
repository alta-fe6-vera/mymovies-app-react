import React, { useState, useEffect } from "react";
import axios from "axios";

import { withRouter } from "../utils/navigation";
import Layout from "../components/Layout";

import movieQu from "../assets/image/movie_qu_red.png";

const Detail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  // Simulasi panggil api
  const fetchMovieDetail = () => {
    const { movie_id } = props.params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=29737ad1a86c54f369b7f540ef2296fa&language=en-US`)
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center h-full">
        <img src={movieQu} alt="" className="w-1/4 animate-pulse" />
      </div>
    );
  } else {
    return (
      <Layout title={"Home"}>
        <div className="mt-10 ml-5 mr-5">
          <div className="flex justify-center">
            <p className="text-2xl sm:text-4xl mb-4">Detail of {data.title} Movie</p>
          </div>
          <div className="flex justify-center">
            <div className="p-3 flex flex-col sm:flex-row shadow-xl bg-red-700 w-full sm:w-2/3 rounded-md">
              <div className="w-full">
                <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.poster_path} />
              </div>
              <div className="ml-4 text-base text-red-50 sm:p-4">
                <div>Title: {data.title}</div>
                <div>
                  Genres:
                  {data.genres.map((item) => (
                    <div key={item.id} className="pl-4">
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div>Overview: {data.overview}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Detail);
