const { default: axios } = require("axios");
const { returnConfigObject, buildRequestURI } = require("./utils");

const THE_ONE_API_URI = "https://the-one-api.dev/v2";

module.exports = class LotrSDK {
  constructor(_apiKey) {
    this.apiKey = _apiKey;
    this.config = returnConfigObject(_apiKey);
  }

  async getMovies(queryParameters) {
    try {
      const uri = buildRequestURI(`${THE_ONE_API_URI}/movie`, queryParameters);
      const { data: movies } = await axios.get(uri, this.config);
      return movies;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }

  async getMovieByID(movieId) {
    try {
      const { data: movie } = await axios.get(
        `${THE_ONE_API_URI}/movie/${movieId}`,
        this.config
      );
      return movie;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }

  async getQuotesForMovie(movieId, queryParameters) {
    try {
      const uri = buildRequestURI(
        `${THE_ONE_API_URI}/movie/${movieId}/quote`,
        queryParameters
      );
      const { data: quotes } = await axios.get(uri, this.config);
      return quotes;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
};
