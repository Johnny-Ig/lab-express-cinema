const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movies = mongoose.model("movies", movieSchema)
module.exports = Movies
