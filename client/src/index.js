import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import MovieDetails from "./pages/MovieDetails";
import SearchResultsModal from "./components/SearchResultsModal";
import ShareMovieModal from "./components/ShareMovieModal.jsx";
import "./styles/app.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/details" component={MovieDetails} exact />
        <Route path="/modal" component={ShareMovieModal} exact />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
