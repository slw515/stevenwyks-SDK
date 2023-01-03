## SDK Design
The SDK is simply an exported Javascript "class". The SDK uses the Javascript class' constructor function and expects an API key. This API key
is then bound to the instantiated object. At a high-level this SDK exposes three methods that a user can call that directly interface with the 
The One API.

On the instantiation of an LotrSDK object, the config object is also created using the `returnConfigObject` helper function. The config object 
includes the bearer token that is required to use the The One API. The format of the object is as follows:

```js
        headers: { Authorization: `Bearer ${token}` }
```

There are three methods that can be called by a user:<br/><br/>

`getMovies(queryParams?)`: returns all the movies. Optional query params can be passed in as a JS object (will be explained later).<br />
`getMovieByID(movieId)`: returns a movie associated with a specific movieId which must be passed in as an argument.<br />
`getQuotesForMovie(movieId, queryParams?)`: returns all quotes associated with a specific movieId which must be passed in as an argument. Optional query params can be passed in as a JS object (will be explained later)<br/>

These three methods are associated with the following endpoints in the The One API (in order):<br/><br/>
`/movie`: returns all the movies.<br />
`/movie/:id`: returns a movie with a certain ID.<br />
`/movie/:id/quote`: returns all quotes associated with a movie (specified with ID).

In the case of the `getMovies()` and `getQuotesForMovie()` methods, the user of the SDK is able to pass in an object with values associated with query params that 
can be used in the API. The `buildRequestURI()` helper function generates the final URI if query params are passed in as an object. 

The query params need to be converted into a string in order to combine it with the base URI to call the API, this is done with the `returnQueryParams()` helper function.
This function loops through the keys and values of the query params object and creates a string in the following format and appends it to the base URI:

```js
  ?param1=value&param2=value
```

Once the final URI is generated, the GET request is made to the API with the library Axios. The config object mentioned earlier is passed in as a second argument to the
method. This has to be done in an async/await function to await the GET request's completion with try/catch blocks to deal with any potential errors.

If an error is thrown by the API call, a new `Error` object is created and thrown with the response data from the `Error` object. 

If the data is successfully received from the API it is returned to the user of the SDK and the asynchronous function will resolve with the data.
