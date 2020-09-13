const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs").promises;
const cors = require("cors");
const bodyParser = require("body-parser");
const knex = require("./config/knex.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const OMDB_URL = "http://www.omdbapi.com/?apikey=dda5319";

const getMoviesByTitle = async (title) => {
  try {
    const urlWithTitle = `${OMDB_URL}&s=${title}&page=1`;
    const response = await axios.get(urlWithTitle);
    const data = response.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// getMoviesByTitle("infinity war");

const getMoviesByID = async (movieID) => {
  try {
    const urlWithTitle = `${OMDB_URL}&i=${movieID}`;
    const response = await axios.get(urlWithTitle);
    const data = response.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// getMoviesByID("tt0118661");

app.get("/movies/:title", async (req, res) => {
  const searchTerm = req.params.title;
  const moviesByTitle = await getMoviesByTitle(searchTerm);
  // console.log(moviesByTitle);
  if (!moviesByTitle) {
    res.status(404).json({ message: `Movie not found` });
    return;
  }
  const movies = moviesByTitle.Search.map((result) => {
    return {
      imdbID: result.imdbID,
      title: result.Title,
      year: result.Year,
      poster: result.Poster,
    };
  });
  res.json(movies);
});

app.get("/movies/:id/details", async (req, res) => {
  const movieID = req.params.id;
  const moviesByID = await getMoviesByID(movieID);
  // console.log(moviesByID);
  if (!moviesByID) {
    res.status(404).json({ message: `Movie not found` });
    return;
  }
  const movie = {
    imdbID: moviesByID.imdbID,
    title: moviesByID.Title,
    year: moviesByID.Year,
    poster: moviesByID.Poster,
    genre: moviesByID.Genre,
    cast: moviesByID.Actors,
    director: moviesByID.Director,
    plot: moviesByID.Plot,
    ratings: moviesByID.Ratings,
    runtime: moviesByID.Runtime,
  };
  res.json(movie);
});

app.get("/movies/:id/comments", async (req, res) => {
  const movieID = req.params.id;
  const [results] = await knex.raw(
    "select * from comments where movie_id = ? order by created_at desc",
    movieID
  );
  // console.log(results);
  res.json(results);
});

app.post("/movies/:id/comments", async (req, res) => {
  const { id: movie_id } = req.params;
  const { name, comment } = req.body;
  const [
    results,
  ] = await knex.raw(
    "insert into comments(comment, name, movie_id) values (:comment, :name, :movie_id);",
    { name, comment, movie_id }
  );

  const [newComment] = await knex.raw(
    "select * from comments where id = ? limit 1;",
    results.insertId
  );
  res.status(201).json(newComment[0]);
});

app.post("/playlists/:id/movies/:movieID", async (req, res) => {
  const { id, movieID: movie_id } = req.params;
  try {
    await knex.raw(
      "insert into playlists_movies (playlist_id, movie_id) values (:id, :movie_id);",
      { id, movie_id }
    );
    res.status(201).json({ message: `${movie_id} added to playlist` });
    return;
  } catch (e) {
    res.status(500).json({ err: e });
  }
});

app.delete("/playlists/:id/movies/:movieID", async (req, res) => {
  const { id, movieID: movie_id } = req.params;
  try {
    await knex.raw(
      "delete from playlists_movies where playlist_id = :id and movie_id = :movie_id;",
      { id, movie_id }
    );
    res.status(200).json({ message: `${movie_id} deleted from playlist` });
    return;
  } catch (e) {
    res.status(500).json({ err: e });
  }
});

app.get("/playlists/:id/movies", async (req, res) => {
  const { id } = req.params;

  try {
    const [results] = await knex.raw(
      `select 
        playlists_movies.movie_id 
      from playlists
        inner join playlists_movies on playlists_movies.playlist_id = playlists.id
      where playlists.id = ?`,
      id
    );
    res.status(200).json({ movies: results });
    return;
  } catch (e) {
    res.status(500).json({ err: e });
  }
});

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(5000, () => {
  console.log("Server Started on http://localhost:5000");
  console.log("Press CTRL + C to stop server");
});
