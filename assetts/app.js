// Establish variables
var header = document.querySelector('.title-flex-container');
var headTitle = document.querySelector('.title');
var dateContainer = document.querySelector('.date-flex-container');
var startDateInput = document.getElementById('Start');
var endDateInput = document.getElementById('End');
var caseNum = document.querySelector('.pandemic-info');
var stockData = document.querySelector('.stock-info');
var graph = document.querySelector('.comparison-graph');
var emailInput = document.getElementById('email-input');
var timeDisplay = document.getElementById('current-time');
// API keys/URLs
var apiKey = 'DVNcrtS4FS68E1LAklJ6h7MWq7aEdRbLXehTvdG8'
var yahooUrl = 'https://yfapi.net/v8/finance/spark?interval=1d&range=1mo&symbols=AAPL&appid=' + apiKey
var covidUrl = 'https://covid-api.mmediagroup.fr/v1/history?country=US&status=confirmed'

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

// Create functions to update time by the second
function updateTime () {
    var refresh = 1000;
    myTime=setTimeout('displayTime()', refresh);
}

function displayTime() {
    var currentTime = dayjs();
    timeDisplay.textContent = currentTime;
    updateTime();
}

displayTime();



function saveStartDate() {
    localStorage.setItem('Start', startDateInput.value);
}

function saveEndDate() {
    localStorage.setItem('End', endDateInput.value);
}

// (optional) Use moment to display current time


// Save fetched data to local storage


// Populate certain data to respective areas of page


// Show recent searches for easy access


// Make data points readable in graph form


// Create reactive calender to input selected time range


// Add event listeners to buttons/submits
startDateInput.onchange = function () {
    saveStartDate();
}

endDateInput.onchange = function () {
    saveEndDate();
}