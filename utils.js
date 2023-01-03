const buildRequestURI = (baseURI, queryStringParams) => {
  let uri = baseURI;

  if (queryStringParams) {
    const builtQueryString = returnQueryString(queryStringParams);
    uri += `?${builtQueryString}`;
  }

  return uri;
};

const returnQueryString = (queryStringParams) => {
  const builtQueryStringArray = [];
  for (let param in queryStringParams) {
    builtQueryStringArray.push(
      encodeURIComponent(param) +
        "=" +
        encodeURIComponent(queryStringParams[param])
    );
  }

  return builtQueryStringArray.join("&");
};

const returnConfigObject = (token) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

module.exports = { returnConfigObject, buildRequestURI };
