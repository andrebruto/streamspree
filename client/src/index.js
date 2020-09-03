import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MovieDetails from "./pages/MovieDetails";
import "./styles/app.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MovieDetails />
  </React.StrictMode>,
  document.getElementById("root")
);
