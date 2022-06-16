import React, { Component } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import { withRouter } from "../utils/navigation";
import { Card } from "../components/Card";
import Layout from "../components/Layout";

import CinemaLoading from "../assets/animations/loading_anm.json";
import movieQu from "../assets/image/movie_qu_red.png";

import "../styles/App.css";

class Homepage extends Component {
  state = {
    data: [],
    title: "WELCOME TO DIANYING",
    dataMovie: [],
    loading: true,
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=29737ad1a86c54f369b7f540ef2296fa&language=en-US&page=1")
      .then((res) => {
        const { results } = res.data;
        this.setState({ data: results });
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ loading: false }));
  }

  handleClick(item) {
    const temp = this.state.dataMovie.slice();
    temp.push(item);
    this.setState({ dataMovie: temp, title: item.title }, () => {
      this.fetchData();
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="flex flex-col justify-center h-full">
          <Lottie loop autoplay animationData={CinemaLoading} className="w-72" />
        </div>
      );
    } else {
      return (
        <Layout title={this.state.title}>
          <div className=" pl-10 pr-10 sm:pl-20 sm:pr-20 mt-10">
            <div className="flex justify-around mb-10 ">
              <img src={movieQu} alt="" className="w-1/4" /> <h1>Movie Qu</h1>
            </div>
            <div className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2 gap-4">
              {this.state.data.map((item) => (
                <Card key={item.id} titleItem={item.title} contentItem={item.content} imageItem={item.poster_path} onClickItem={() => this.props.navigate(`/movie/${item.id}`)} />
              ))}
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default withRouter(Homepage);
