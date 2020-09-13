const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs").promises;
const cors = require("cors");
const bodyParser = require("body-parser");

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
  console.log(moviesByTitle);
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

app.get("/movies/details/:id", async (req, res) => {
  const movieID = req.params.id;
  const moviesByID = await getMoviesByID(movieID);
  console.log(moviesByID);
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
  };

  res.json(movie);
});

// const urlwithID = "http://www.omdbapi.com/?apikey=dda5319&i=tt4154756";

// let db;

// const getMovieById = async (urlwithID) => {
//   try {
//     const response = await axios.get(urlwithID);
//     const data = response.data;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getMovieById(urlwithID);

// axios.get("http://www.omdbapi.com/?apikey=dda5319&s=", {
//   params: {
//     q: "axios",
//   },
// });

// app.get("/movies", (req, res) => {
//   const searchTerm = req.query.search;
//   const url = `http://www.omdbapi.com/?apikey=dda5319&s=${searchTerm}`;
//   axios
//     .get(url)
//     .then((res) => {
//       // console.log(res.data.Search);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(5000, () => {
  console.log("Server Started on http://localhost:5000");
  console.log("Press CTRL + C to stop server");
});
