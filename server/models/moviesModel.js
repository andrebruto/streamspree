const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const moviesFile = path.join(__dirname, "../db/movies.json");

const 