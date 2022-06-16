import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import Favourite from "../pages/Favourites";

class RoutesApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p> 404</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RoutesApp;
