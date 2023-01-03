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
const LotrSDK = require('stevenwyks-sdk');
const ACCESS_KEY = "_access_key_here_"
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
        const movieId = "5cd95395de30eff6ebccde5b"
        const res = await lotr.getMovieByID(movieId);
        console.log(res);
    } catch(error) {
        console.error(error);
    }
```


### Query Params
There are various query parameters for filtering, sorting and pagination, please view them [here](https://the-one-api.dev/documentation).

Query Params can be optionally passed in as a JS object as the final argument to both the `getMovies()` and `getQuotesForMovie()` methods. 

This can be done as follows:
```js
    try {
        const movieId = "5cd95395de30eff6ebccde5b"
        const res = await lotr.getQuotesForMovie(movieId, { limit: 5, offset: 2, sort: "dialog:desc" });
        console.log(res);
    } catch(error) {
        console.error(error);
    }
```
