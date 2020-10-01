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

const OMDB_URL = "http://www.omdbapi.com/?apikey=b8c9aac3";

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

const getRandomMovie = async () => {
  try {
    const titles = [
      "Report",
      "Money",
      "Blood",
      "World",
      "Die",
      "Museum",
      "Night",
      "Case",
      "Princess",
      "House",
      "Black",
      "Heart",
      "Love",
      "Wonder",
      "Music",
      "Happy",
      "Fun",
      "Joy",
      "Glass",
      "Drink",
      "Glow",
      "Bad",
      "Good",
      "Mind",
      "Beautiful",
      "Dream",
      "Glory",
      "Art",
      "Peace",
      "War",
      "Joke",
      "America",
      "Fight",
      "King",
      "Queen",
      "Wild",
      "Star",
      "Future",
      "Past",
      "Day",
      "Home",
      "Last",
      "First",
      "Secret",
      "Time",
      "Road",
      "Lady",
      "Street",
      "Family",
      "Sweet",
      "Chef",
      "Song",
      "Music",
      "The Irishman",
    ];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);
    const years = [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ];
    const randomYearIndex = Math.floor(Math.random() * years.length);
    const urlWithParams = `${OMDB_URL}&s=${titles[randomTitleIndex]}&y=${years[randomYearIndex]}`;
    const results = await axios.get(urlWithParams);
    const movies = results.data.Search;
    // console.log(movies);
    const movieIDs = movies.map((id) => id.imdbID);

    let foundMovie;
    for (const id of movieIDs) {
      const fullMovieDetails = await axios.get(`${OMDB_URL}&i=${id}`);
      if (
        fullMovieDetails.data.imdbRating !== "N/A" &&
        +fullMovieDetails.data.imdbRating > 7.0
      ) {
        foundMovie = fullMovieDetails.data;
        break;
      }
    }
    // console.log(foundMovie);
    if (foundMovie) {
      return foundMovie;
    }
    await getRandomMovie();
  } catch (err) {
    console.log(err);
  }
};

// getRandomMovie();

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

app.get("/movies/movie/random", async (req, res) => {
  const randomResult = await getRandomMovie();
  console.log("getRandom01", randomResult);

  if (!randomResult) {
    res.status(404).json({ message: `Movie not found` });
    return;
  }
  const movie = {
    imdbID: randomResult.imdbID,
    title: randomResult.Title,
    year: randomResult.Year,
    poster: randomResult.Poster,
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

app.get("/playlists/:id/movies/:movieID", async (req, res) => {
  const { id, movieID } = req.params;

  try {
    const [results] = await knex.raw(
      `select 
        playlists_movies.movie_id 
      from playlists
        inner join playlists_movies on playlists_movies.playlist_id = playlists.id
      where playlists.id = :id
       and playlists_movies.movie_id = :movieID
       limit 1`,
      { id, movieID }
    );

    res.status(200).json({ movies: results });

    return;
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(5000, () => {
  console.log("Server Started on http://localhost:5000");
  console.log("Press CTRL + C to stop server");
});
