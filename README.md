# lord-of-the-rings-sdk

## Installation of SDK

Use the package manager [npm](https://www.npmjs.com/) to install the [stevenwyks-sdk](https://www.npmjs.com/package/stevenwyks-sdk).

```js
npm install stevenwyks-sdk
```

## Usage

In order to use the SDK, you must retrieve an access key [here](https://the-one-api.dev/sign-up). The access key is used when creating an instance of the LotrSDK class so that its methods can make successful API calls to the The One API.

Next, import the SDK as a module and pass in your access key to create a new SDK object.

```js
const LotrSDK = require("stevenwyks-sdk");
const ACCESS_KEY = "_access_key_here_";
const lotr = new LotrSDK(ACCESS_KEY);
```

The following methods can be called on the instantiated SDK object.<br/><br/>
`getMovies(queryParams?)`: returns all the movies. Optional query params can be passed in as a JS object (will be explained later).<br />
`getMovieByID(movieId)`: returns a movie associated with a specific movieId which must be passed in as an argument.<br />
`getQuotesForMovie(movieId, queryParams?)`: returns all quotes associated with a specific movieId which must be passed in as an argument. Optional query params can be passed in as a JS object (will be explained later)/

These three methods are associated with the following endpoints (in order):<br/><br/>
`/movie`: returns all the movies.<br />
`/movie/:id`: returns a movie with a certain ID.<br />
`/movie/:id/quote`: returns all quotes associated with a movie (specified with ID).

Here are examples of how the `getMovieByID` method can be called:

```js
try {
  const movieId = "5cd95395de30eff6ebccde5b";
  const res = await lotr.getMovieByID(movieId);
  console.log(res);
} catch (error) {
  console.error(error);
}
```

### Query Params

There are various query parameters for filtering, sorting and pagination, please view them [here](https://the-one-api.dev/documentation).

Query Params can be optionally passed in as a JS object as the final argument to both the `getMovies()` and `getQuotesForMovie()` methods.

This can be done as follows:

```js
try {
  const movieId = "5cd95395de30eff6ebccde5b";
  const res = await lotr.getQuotesForMovie(movieId, {
    limit: 5,
    offset: 2,
    sort: "dialog:desc",
  });
  console.log(res);
} catch (error) {
  console.error(error);
}
```

## Testing
Testing is done with the Jest testing framework. The tests run the three main methods on the LotrSDK class and expect valid data on a successful Axios GET request and an error to be thrown when the Axios call throws an error. 

Tests can be run with the following command:
```js
npm run test
```

The tests are in the `./tests` directory and mocked data is present in the `./mocks` directory within the `./tests` folder. The mock file mocks data received from the LotrSDK methods, mock headers for the bearer token and a mock error message that resembles that received from Axios on an error.

The successful tests mock a resolved Axios request with the mock data. The test then asserts that the result of the function is identical to that of the data passed in to the mock resolved Axios request. The test also asserts that the correct headers/endpoint were used in the request, testing the generation of the config object that contains the headers as well as the generation of query params. 

For the unsuccessful tests, a Axios request is rejected and an error object is passed in. The test then asserts that the method returns an object of type 
`Error`