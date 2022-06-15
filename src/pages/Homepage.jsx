import React, { Component } from "react";
import Lottie from "lottie-react";

import { Card, Card2 } from "../components/Card";
import Layout from "../components/Layout";

import CinemaLoading from "../assets/animations/loading_anm.json";
import "../styles/App.css";
import axios from "axios";

class Homepage extends Component {
  state = {
    data: [],
    title: "WELCOME TO DIANYING",
    dataMovie: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  handleClick(item) {
    const temp = this.state.dataMovie.slice();
    temp.push(item);
    this.setState({ dataMovie: temp, title: item.title }, () => {
      this.fetchData();
    });
  }

  // Simulasi panggil api
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

  render() {
    if (this.state.loading) {
      return (
        <div className="container">
          <Lottie loop autoplay animationData={CinemaLoading} className="w-72 mx-auto mt-52" />
        </div>
      );
    } else {
      return (
        <Layout title={this.state.title}>
          <div className="pl-0 pr-0 sm:pl-20 sm:pr-20 mt-10">
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2 gap-4">
              {this.state.data.map((item) => (
                <Card key={item.id} titleItem={item.title} contentItem={item.content} imageItem={item.poster_path} onClickItem={() => this.handleClick(item)} />
              ))}
            </div>
            <h1>MY FAVOURITE MOVIES</h1>
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2 gap-4">
              {this.state.dataMovie.map((item) => (
                <Card2 key={item.id} titleItem={item.title} contentItem={item.content} imageItem={item.poster_path} onClickItem={() => this.handleClick(item)} />
              ))}
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default Homepage;
