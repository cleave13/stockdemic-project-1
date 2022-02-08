// Establish variables
var header = document.querySelector('.title-flex-container');
var headTitle = document.querySelector('.title');
var dateContainer = document.querySelector('.date-flex-container');
var startDateInput = document.getElementById('start');
var endDateInput = document.getElementById('end');
var caseNum = document.querySelector('.pandemic-info');
var stockData = document.querySelector('.stock-info');
var graph = document.querySelector('.comparison-graph');
var emailInput = document.getElementById('email-input');
var timeDisplay = document.getElementById('current-time');
var stockInput  = document.getElementById('search-input');
var searchBtn = document.getElementById('search-btn');
// API keys/URLs
var finApiKey = 'UZNMbYCqMtdpiMdEBePJKpAgA3sj26Ww'
var covApiKey = 'af7c694b68c14befb5deb6e06062d2ec'
//var yahooUrl = 'https://yfapi.net/v8/finance/spark?interval=1d&range=2yr&symbols=AAPL&appid='
var finUrl = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=' + finApiKey
var covidUrl = 'https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=' + covApiKey
//var covidUrl = 'https://covid-api.mmediagroup.fr/v1/history?country=US&status=confirmed'

// change ticker from user input

function getUrl() {
    var ticker = stockInput.value
    var start = startDateInput.value
    var end = endDateInput.value
    var finUrl = 'https://api.polygon.io/v2/aggs/ticker/' + ticker + '/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey
    

// Call on our APIs
 fetch(finUrl, {
     method: 'GET',
     mode: 'cors', 
   }).then(function (response) {
       if (response.ok) {
           return response.json()
       }
   }).then(function (data) {
       console.log(data)
       renderSampleChart(data)
       console.log(data.results[0].c)
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
}


// Use dayjs to display current time
// Create functions to update time by the second
function updateTime () {
    var refresh = 1000;
    myTime=setTimeout('displayTime()', refresh);
}

displayTime();



function saveStartDate() {
    localStorage.setItem('Start', startDateInput.value);
}

function saveEndDate() {
    localStorage.setItem('End', endDateInput.value);
}



function displayTime() {
    var currentTime = dayjs();
    timeDisplay.textContent = currentTime;
    updateTime();
}





// Save fetched data to local storage


// Populate certain data to respective areas of page


// Show recent searches for easy access


// Make data points readable in graph form


function renderSampleChart(stockData) {
        
    const labels = stockData
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'AAPL Financial Data',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockData.results[0].c
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {}
      };
      const newChart = new Chart(
        document.getElementById('stock-chart'),
        config
        );
}

// Create reactive calender to input selected time range


// Add event listeners to buttons/submits
startDateInput.onchange = function () {
    saveStartDate();
}

endDateInput.onchange = function () {
    saveEndDate();
}

searchBtn.addEventListener('click', function () {
    getUrl();
    renderSampleChart();
})
// Logic


