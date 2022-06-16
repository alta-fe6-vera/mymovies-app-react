import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "../utils/navigation";
import Layout from "../components/Layout";

import movieQu from "../assets/image/movie_qu_red.png";

class Detail extends Component {
  state = {
    data: [],
    title: "WELCOME TO DIANYING",
    dataMovie: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  // Simulasi panggil api
  fetchData() {
    const { movie_id } = this.props.params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=29737ad1a86c54f369b7f540ef2296fa&language=en-US`)
      .then((res) => {
        const { data } = res;
        this.setState({ data });
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return (
        <div className="flex justify-center h-full">
          <img src={movieQu} alt="" className="w-1/4 animate-pulse" />
        </div>
      );
    } else {
      return (
        <Layout title={"Home"}>
          <div className="mt-10">
            <p className="text-4xl mb-4">Detail of {data.title} Movie</p>
            <div className="p-3 grow flex shadow-xl bg-red-700 w-1/2 rounded-md">
              <div className="w-full">
                <img className="w-full h-full" src={this.props.imageItem ? `https://image.tmdb.org/t/p/w500${this.props.imageItem}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={this.props.imageItem} />
              </div>
              <div className="ml-4 text-base text-red-50 p-4">
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
        </Layout>
      );
    }
  }
}

export default withRouter(Detail);
