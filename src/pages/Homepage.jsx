import React, { Component } from "react";
import Lottie from "lottie-react";

import { Card, Card2 } from "../components/Card";
import Layout from "../components/Layout";

import CinemaLoading from "../assets/animations/loading_anm.json";
import "../styles/App.css";

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
    this.setState({ dataMovie: temp, title: item.title });
  }

  // Simulasi panggil api
  fetchData() {
    setTimeout(() => {
      const dummy = [
        {
          id: 1,
          title: "Title 1",
          content: "Content 1",
          image: "https://i.pinimg.com/736x/0a/08/55/0a08558452e501da0404d50429952e2e.jpg",
        },
        {
          id: 2,
          title: "Title 2",
          content: "Content 2",
          image: "https://i.pinimg.com/736x/0a/08/55/0a08558452e501da0404d50429952e2e.jpg",
        },
        {
          id: 3,
          title: "Title 3",
          content: "Content 3",
          image: "https://i.pinimg.com/736x/0a/08/55/0a08558452e501da0404d50429952e2e.jpg",
        },
        {
          id: 4,
          title: "Title 4",
          content: "Content 4",
          image: "https://i.pinimg.com/736x/0a/08/55/0a08558452e501da0404d50429952e2e.jpg",
        },
        {
          id: 5,
          title: "Title 5",
          content: "Content 5",
          image: "https://i.pinimg.com/736x/0a/08/55/0a08558452e501da0404d50429952e2e.jpg",
        },
        {
          id: 6,
          title: "Title 6",
          content: "Content 6",
          image: "https://i.pinimg.com/736x/0a/08/55/0a08558452e501da0404d50429952e2e.jpg",
        },
      ];
      this.setState({ data: dummy }, () =>
        this.setState({
          loading: false,
        })
      );
    }, 3000);
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
          <div className="pl-20 pr-20">
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
              {this.state.data.map((item) => (
                <Card key={item.id} titleItem={item.title} contentItem={item.content} imageItem={item.image} onClickItem={() => this.handleClick(item)} />
              ))}
            </div>
            <h1>MY FAVOURITE MOVIES</h1>
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
              {this.state.dataMovie.map((item) => (
                <Card2 key={item.id} titleItem={item.title} contentItem={item.content} imageItem={item.image} onClickItem={() => this.handleClick(item)} />
              ))}
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default Homepage;
