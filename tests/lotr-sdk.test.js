const { default: axios } = require("axios");

const LotrSDK = require("../lotr-sdk.js");
const {
  getQuotesByMovieIdMockData,
  getMoviesMockData,
  getMovieByIdMockData,
  mockAuthHeaders,
  err,
} = require("./mocks/lotr-sdk-mocks.js");
const ACCESS_KEY = "mockBearer123";

jest.mock("axios");

describe("Test LOTR SDK", () => {
  // Successful API calls
  it("fetches a single LOTR movie successfully", async () => {
    const lotr = new LotrSDK(ACCESS_KEY);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: getMovieByIdMockData })
    );

    await expect(
      lotr.getMovieByID("5cd95395de30eff6ebccde5b")
    ).resolves.toEqual(getMovieByIdMockData);

    expect(axios.get).toHaveBeenCalledWith(
      "https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b",
      mockAuthHeaders
    );
  });

  it("fetches all LOTR movies successfully", async () => {
    const lotr = new LotrSDK(ACCESS_KEY);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: getMoviesMockData })
    );

    await expect(lotr.getMovies({ limit: 2 })).resolves.toEqual(
      getMoviesMockData
    );

    expect(axios.get).toHaveBeenCalledWith(
      "https://the-one-api.dev/v2/movie?limit=2",
      mockAuthHeaders
    );
  });

  it("fetches quotes for The Two Towers successfully", async () => {
    const lotr = new LotrSDK(ACCESS_KEY);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: getQuotesByMovieIdMockData })
    );

    await expect(
      lotr.getQuotesForMovie("5cd95395de30eff6ebccde5b", {
        limit: 2,
        sort: "dialog:desc",
      })
    ).resolves.toEqual(getQuotesByMovieIdMockData);

    expect(axios.get).toHaveBeenCalledWith(
      "https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b/quote?limit=2&sort=dialog%3Adesc",
      mockAuthHeaders
    );
  });

  // Failed Axios Calls
  it("throws an error with failed Axios call when fetching a single movie", async () => {
    const lotr = new LotrSDK(ACCESS_KEY);

    axios.get.mockRejectedValueOnce(err);

    await expect(
      lotr.getMovieByID("5cd95395de30eff6ebccde5c")
    ).rejects.toBeInstanceOf(Error);
  });

  it("throws an error with failed Axios call when fetching all movies", async () => {
    const lotr = new LotrSDK(ACCESS_KEY);

    axios.get.mockRejectedValueOnce(err);

    await expect(
      lotr.getMovies("5cd95395de30eff6ebccde5c", {
        limit: 2,
        sort: "dialog:desc",
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it("throws an error with failed Axios call when fetching all quotes for a given movie", async () => {
    const lotr = new LotrSDK(ACCESS_KEY);

    axios.get.mockRejectedValueOnce(err);

    await expect(
      lotr.getQuotesForMovie("5cd95395de30eff6ebccde5c", {
        limit: 2,
        sort: "dialog:desc",
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
