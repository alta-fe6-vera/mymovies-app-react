/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "../utils/context";
import { useDispatch } from "react-redux/es/exports";
import { reduxAction } from "../utils/redux/actions/action";

import Favourite from "../pages/Favourites";
import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import Upcoming from "../pages/Upcoming";

const RoutesApp = (props) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const tempLocal = localStorage.getItem("favMovie");
    if (tempLocal) {
      dispatch(reduxAction("SET_FAVOURITES", JSON.parse(tempLocal)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/upcoming" element={<Upcoming />} />
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
    </ThemeContext.Provider>
  );
};

export { RoutesApp }; // Export tanpa Default
