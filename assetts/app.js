var apiKey = 'DVNcrtS4FS68E1LAklJ6h7MWq7aEdRbLXehTvdG8'
var yahooUrl = 'https://yfapi.net/v8/finance/spark?interval=1d&range=1mo&symbols=AAPL&appid=' + apiKey
var covidUrl = 'https://covid-api.mmediagroup.fr/v1/history?country=US&status=confirmed'

fetch(yahooUrl, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'x-api-key': 'DVNcrtS4FS68E1LAklJ6h7MWq7aEdRbLXehTvdG8'
    },
  }).then(function (response) {
      if (response.ok) {
          return response.json()
      }
  }).then(function (data) {
      console.log(data)
  })

fetch(covidUrl, {
    method: 'GET',
    mode: 'cors',
}).then(function (response) {
    if (response.ok) {
        return response.json()
    }
}).then(function (data) {
    console.log(data)
})