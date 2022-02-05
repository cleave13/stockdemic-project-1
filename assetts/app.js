// Establish variables
var apiKey = 'DVNcrtS4FS68E1LAklJ6h7MWq7aEdRbLXehTvdG8';
var yahooUrl = 'https://yfapi.net/v8/finance/spark?interval=1d&range=1mo&symbols=AAPL&appid=' + apiKey;
var covidUrl = 'https://covid-api.mmediagroup.fr/v1/history?country=US&status=confirmed';

// Call on our APIs
fetch(yahooUrl, {
    method: 'GET',
    mode: 'cors', 
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

// (optional) Use moment to display current time


// Save fetched data to local storage
function saveLocal() {
    localStorage.setItem('Price', price);
    localStorage.setItem('Cases', cases);
}

// Populate certain data to respective areas of page


// Show recent searches for easy access


// Make data points readable in graph form


// Create reactive calender to input selected time range


// Add event listeners to buttons/submits