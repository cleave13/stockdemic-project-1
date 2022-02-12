// Establish global variables from DOM elements
var header = document.querySelector('.title-flex-container');
var headTitle = document.querySelector('.title');
var dateContainer = document.querySelector('.date-flex-container');
var startDateInput = document.getElementById('start');
var endDateInput = document.getElementById('end');
var caseNum = document.querySelector('.pandemic-info');
var stockData = document.querySelector('.stock-info');
var graph = document.querySelector('.comparison-graph');
var timeDisplay = document.getElementById('current-time');
var stockInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-btn');
var spBtn = document.getElementById('sp-btn');
var healthBtn = document.getElementById('healthcare-btn');
var energyBtn = document.getElementById('energy-btn');
var finBtn = document.getElementById('financials-btn');
var estateBtn = document.getElementById('estate-btn');

//Declare global variables for both charts
var covidChart;
var stockChart;

// API keys/URLs
var finApiKey = 'UZNMbYCqMtdpiMdEBePJKpAgA3sj26Ww';
var covApiKey = 'af7c694b68c14befb5deb6e06062d2ec';

//Define API endpoints and paths
var finRootUrl = 'https://api.polygon.io/v2/aggs/ticker' + finApiKey;
var covidUrl = 'https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=' + covApiKey;

// change ticker and range from user input

function getUrl() {
    var ticker = stockInput.value;
    var start = startDateInput.value;
    var end = endDateInput.value;
    var finUrl = finRootUrl + ticker + '/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey;

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

// if S&P button is pressed fetch info from ETF SPY
function getSpUrl() {
    stockInput.value = 'SPY';
    var start = startDateInput.value;
    var end = endDateInput.value;
    var finUrl = 'https://api.polygon.io/v2/aggs/ticker/SPY/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey


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

// If healthcare button is pressed fetch data from ETF XBI
function getHealthUrl() {
    stockInput.value = 'XBI';
    var start = startDateInput.value;
    var end = endDateInput.value;
    var finUrl = 'https://api.polygon.io/v2/aggs/ticker/XBI/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey


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

// If energy button is pressed fetch data from ETF PXE
function getEnergyUrl() {
    stockInput.value = 'PXE';
    var start = startDateInput.value;
    var end = endDateInput.value;
    var finUrl = 'https://api.polygon.io/v2/aggs/ticker/PXE/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey


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

// If financials button is pressed fetch data from ETF
function getFinUrl() {
    stockInput.value = 'VFH';
    var start = startDateInput.value;
    var end = endDateInput.value;
    var finUrl = 'https://api.polygon.io/v2/aggs/ticker/VFH/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey


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

// If real estate button is pressed fetch data from ETF
function getEstateUrl() {
    stockInput.value = 'VNQ';
    var start = startDateInput.value;
    var end = endDateInput.value;
    var finUrl = 'https://api.polygon.io/v2/aggs/ticker/VNQ/range/1/day/' + start + '/' + end + '?apiKey=' + finApiKey


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
function updateTime() {
    var refresh = 1000;
    myTime = setTimeout('displayTime()', refresh);
}

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
    let ctx = document.getElementById('stock-chart').getContext('2d');
    const stockLabels = [];
    const stockArray = [];
    var startDate = dayjs(startDateInput.value);
    var endDate = dayjs(endDateInput.value);
    var totalDays = endDate.diff(startDate, 'day') + 1;

    // Create new Date instance
    let date = new Date(startDateInput.value);
    let dayCounter = 0;

    // Loop over all stock results returned from the API
    for (let i = 0; i < stockData.results.length; i++) {
        const stockResult = stockData.results[i];
        
        // Add a day
        date.setDate(date.getDate() + 1);
        stockLabels.push(date.toLocaleDateString(("en-US"), { day: "numeric", month: "short" }));
        stockArray.push(stockResult.c);
        dayCounter++

        if (date.getDay() === 5 || (i === stockData.results.length - 1 && dayCounter < totalDays)) {
            while (date.getDay() !== 0 && dayCounter < totalDays) {
                stockArray.push(stockResult.c);
                date.setDate(date.getDate() + 1);
                stockLabels.push(date.toLocaleDateString(("en-US"), { day: "numeric", month: "short" }));
                dayCounter++
            }
        }
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
    stockChart = new Chart(ctx, {
        type: 'line',
        data: data
    })
};

function renderCovidChart(covidData) {
    var ctx = document.getElementById('pandemic-chart').getContext('2d');
    const covidLabels = [];
    const covidArray = [];
    // if index of parent = -1 inside of loop has data.ats[i] within each have another loop at the [j](find and compare date)
    // if it matches grab data.ats[i][j].newCases
    startDateString = startDateInput.value;
    endDateString = endDateInput.value;
    const startIndex = covidData.actualsTimeseries.findIndex(item => item.date === startDateString);
    const endIndex = covidData.actualsTimeseries.findIndex(item => item.date === endDateString) + 1;
    const timeRange = covidData.actualsTimeseries.slice(startIndex, endIndex);

    // Create new Date instance
    var date = new Date(startDateInput.value)

    for (let i = 0; i < timeRange.length; i++) {
        const covidTime = timeRange[i];

        // Add a day
        date.setDate(date.getDate() + 1);
        covidLabels.push(date.toLocaleDateString(("en-US"), { day: "numeric", month: "short" }));
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
    covidChart = new Chart(ctx, {
        type: 'bar',
        data: data
    })
};

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

spBtn.addEventListener('click', function () {
    getSpUrl();
})

healthBtn.addEventListener('click', function () {
    getHealthUrl();
})

energyBtn.addEventListener('click', function () {
    getEnergyUrl();
})

finBtn.addEventListener('click', function () {
    getFinUrl();
})

estateBtn.addEventListener('click', function () {
    getEstateUrl();
})

// Logic

displayTime();