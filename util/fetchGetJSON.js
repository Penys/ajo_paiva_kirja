export default url => (
  // Fetch always returns a resolved or rejected Promise, or another Promise.
  fetch(url, {
    method: 'GET',
  })
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject(response.status)
      }
      // .json() is a built-in Promise in fetch that parses the response.
      return response.json()
    })
)
