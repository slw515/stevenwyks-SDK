// File for trying out instantiating an LotrSDK object and running asynchronous methods.

const LotrSDK = require("../lotr-sdk.js");
const ACCESS_KEY = "yvugvSaSOXl7o50l5G1c";
const lotr = new LotrSDK(ACCESS_KEY);

const testGettingMovieById = async () => {
  try {
    const res = await lotr.getMovieByID("5cd95395de30eff6ebccde5b");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const testGettingMovies = async () => {
  try {
    const res = await lotr.getMovies({ limit: 4 });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const testGettingQuotesByMovieId = async () => {
  try {
    const res = await lotr.getQuotesForMovie("5cd95395de30eff6ebccde5b", {
      limit: 10,
      sort: "dialog:desc",
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

testGettingMovieById();
testGettingMovies();
testGettingQuotesByMovieId();
