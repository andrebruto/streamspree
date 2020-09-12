import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import MovieDetails from "./pages/MovieDetails";
import Playlist from "./pages/Playlist";
import "./styles/app.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/details/" component={MovieDetails} exact />
        <Route path="/playlist/" component={Playlist} exact />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
