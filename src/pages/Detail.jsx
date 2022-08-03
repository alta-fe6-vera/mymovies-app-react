/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from "@mui/joy/Card";

import { withRouter } from "../utils/navigation";
import { Layout } from "../components/Layout";
// import CustomFooter from "../components/Footer";

import quMovie from "../assets/image/qu_movie_red.png";
import { FaStar } from "react-icons/fa";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import AspectRatio from "@mui/joy/AspectRatio";

const Detail = (props) => {
  const [data, setData] = useState({});
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  // Simulasi panggil api
  const fetchMovieDetail = () => {
    const { movie_id } = props.params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`)
      .then((res) => {
        const { data } = res;
        setData(data);
        setTrailer(data.videos.results);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

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
      <Layout title={"Home"}>
        <div className="mt-10 ml-5 mr-5 mb-10">
          <div className="flex justify-center">
            <p className="text-2xl lg:text-4xl mb-4 dark:text-red-50">Detail of {data.title} Movie</p>
          </div>
          <div className="flex justify-center">
            <div className="p-3 flex flex-col shadow-xl bg-red-700 w-full lg:w-2/3 rounded-md">
              <div className="font-semibold text-red-50 mb-4">Trailer</div>
              <div className="mb-8">
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    py: 1,
                    overflow: "auto",
                    scrollSnapType: "x mandatory",
                    "& > *": {
                      scrollSnapAlign: "center",
                    },
                    "::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {trailer.flatMap((item) => (
                    <Card
                      row
                      key={item.id}
                      variant="outlined"
                      sx={{
                        gap: 2,
                        borderColor: "white",
                      }}
                    >
                      <AspectRatio ratio="2" sx={{ minWidth: 420, borderRadius: "sm", overflow: "auto", display: "relative" }}>
                        <iframe
                          key={item.id}
                          src={`https://www.youtube.com/embed/${item.key}`}
                          title={item.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </Card>
                  ))}
                </Box>
              </div>
              <div className="font-semibold text-red-50 mb-4">Details</div>
              <div className="flex flex-col lg:flex-row w-full text-red-50">
                <img className="w-80 self-center" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.poster_path} />
                <div className="ml-0 lg:ml-8 mt-8 lg:mt-0 flex flex-col">
                  <div>Title: {data.title}</div>
                  <div>Release: {data.release_date}</div>
                  <div className="flex">
                    Rating: {data.vote_average} <FaStar className="self-center text-sm ml-1" />
                  </div>
                  Genres:
                  {data.genres.map((item) => (
                    <div key={item.id} className="pl-4">
                      <p>{item.name}</p>
                    </div>
                  ))}
                  Overview: {data.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <CustomFooter /> */}
      </Layout>
    );
  }
};

export default withRouter(Detail);
