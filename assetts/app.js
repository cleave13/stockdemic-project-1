// Establish variables
var header = document.querySelector('.title-flex-container');
var headTitle = document.querySelector('.title');
var dateContainer = document.querySelector('.date-flex-container');
var startDateInput = document.getElementById('start');
var endDateInput = document.getElementById('end');
var caseNum = document.querySelector('.pandemic-info');
var stockData = document.querySelector('.stock-info');
var graph = document.querySelector('.comparison-graph');
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

// change ticker and range from user input

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
       renderStockChart(data)
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
     renderCovidChart(data)
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
    var currentTime = dayjs().format('DD/MM/YYYY hh:mm:ss');
    timeDisplay.textContent = currentTime;
    updateTime();
}





// Save fetched data to local storage


// Populate certain data to respective areas of page


// Show recent searches for easy access


// Make data points readable in graph form


function renderStockChart(stockData) {
    console.log(stockData.results);
    var ctx = document.getElementById('stock-chart').getContext('2d');
    const stockLabels = []
    const stockArray = []

    // Create new Date instance
    var date = new Date(startDateInput.value)

    for (let i = 0; i < stockData.results.length; i++) {
        const stockResult = stockData.results[i];
        
        // Add a day
        date.setDate(date.getDate() + 1);
        stockLabels.push(date.toLocaleDateString(("en-US"),{day:"numeric", month:"short"}));
        stockArray.push(stockResult.c);
        // if (fri) { <-- Need to leverage Day.js library to get day of week
        //     stockArray.push(stockResult.c);
        //     stockArray.push(stockResult.c);
        // }
    }

    var data = {
        labels: stockLabels,
        datasets: [{
          label: stockInput.value,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockArray
        }]
    }
    var stockChart = new Chart(ctx, {
        type: 'line',
        data: data
      })
    };

function renderCovidChart(covidData) {
    console.log(covidData);
    var ctx = document.getElementById('pandemic-chart').getContext('2d');
    const covidLabels = []
    const covidArray = [];
    
    const filteredTimeSeries = covidData.actualsTimeseries.slice(0,5);
    console.log(filteredTimeSeries)
    
    // Create new Date instance
    var date = new Date(startDateInput.value)

    for (let i = 0; i < filteredTimeSeries.length; i++) {
        const covidTime = filteredTimeSeries[i];
        
        // Add a day
        date.setDate(date.getDate() + 1);
        covidLabels.push(date.toLocaleDateString(("en-US"),{day:"numeric", month:"short"}));
        covidArray.push(covidTime.newCases);
    }

    var data = {
        labels: covidLabels,
        datasets: [{
          label: "New Cases",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: covidArray
        }]
    }
    var stockChart = new Chart(ctx, {
        type: 'bar',
        data: data
      })
};


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
})
// Logic


