const getMovieByIdMockData = {
  docs: [
    {
      _id: "5cd95395de30eff6ebccde5b",
      name: "The Two Towers",
      runtimeInMinutes: 179,
      budgetInMillions: 94,
      boxOfficeRevenueInMillions: 926,
      academyAwardNominations: 6,
      academyAwardWins: 2,
      rottenTomatoesScore: 96,
    },
  ],
  total: 1,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1,
};

const getMoviesMockData = {
  docs: [
    {
      _id: "5cd95395de30eff6ebccde56",
      name: "The Lord of the Rings Series",
      runtimeInMinutes: 558,
      budgetInMillions: 281,
      boxOfficeRevenueInMillions: 2917,
      academyAwardNominations: 30,
      academyAwardWins: 17,
      rottenTomatoesScore: 94,
    },
    {
      _id: "5cd95395de30eff6ebccde57",
      name: "The Hobbit Series",
      runtimeInMinutes: 462,
      budgetInMillions: 675,
      boxOfficeRevenueInMillions: 2932,
      academyAwardNominations: 7,
      academyAwardWins: 1,
      rottenTomatoesScore: 66.33333333,
    },
  ],
  total: 8,
  limit: 2,
  offset: 0,
  page: 1,
  pages: 4,
};

const getQuotesByMovieIdMockData = {
  docs: [
    {
      _id: "5cd96e05de30eff6ebccee6f",
      dialog: "oh!",
      movie: "5cd95395de30eff6ebccde5b",
      character: "5cd99d4bde30eff6ebccfd23",
      id: "5cd96e05de30eff6ebccee6f",
    },
    {
      _id: "5cd96e05de30eff6ebccea07",
      dialog: "lt is!",
      movie: "5cd95395de30eff6ebccde5b",
      character: "5cd99d4bde30eff6ebccfe2e",
      id: "5cd96e05de30eff6ebccea07",
    },
  ],
  total: 1009,
  limit: 2,
  offset: 0,
  page: 1,
  pages: 505,
};

const mockAuthHeaders = {
  headers: { Authorization: "Bearer mockBearer123" },
};

const err = {
  response: {
    data: {
      message: "Error!",
    },
  },
};

module.exports = {
  getMoviesMockData,
  getMovieByIdMockData,
  getQuotesByMovieIdMockData,
  mockAuthHeaders,
  err,
};
