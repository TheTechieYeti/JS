
var cookieNav = document.getElementById("cookies");

function removenotice() {
    cookies.remove();
}
function loading(params) {
    console.log ("This is WOrking")
    alert ("Weather report is loading now...") 
}

var currentTodayHigh = document.getElementById("todayHigh").innerHTML;
var currentTodayLow = document.getElementById("todayLow").innerHTML;

var currentTomorrowHigh = document.getElementById("tomorrowHigh").innerHTML;
var currentTomorrowLow = document.getElementById("tomorrowLow").innerHTML;

var currentFridayHigh = document.getElementById("fridayHigh").innerHTML;
var currentFridayLow = document.getElementById("fridayLow").innerHTML;

var currentSaturdayHigh = document.getElementById("saturdayHigh").innerHTML;
var currentSaturdayLow = document.getElementById("saturdayLow").innerHTML;

function selectWeather() {
    var theWeather = document.getElementById("temp");
    var selectedVal = theWeather.value;
    if(selectedVal == 'F') {
        console.log = ("hi")
        document.getElementById("todayHigh").innerHTML = Math.round((currentTodayHigh * 1.8) + 32);
         document.getElementById("todayLow").innerHTML = Math.round((currentTodayLow * 1.8) + 32);

        document.getElementById("tomorrowHigh").innerHTML = Math.round((currentTomorrowHigh * 1.8) + 32);
        document.getElementById("tomorrowLow").innerHTML = Math.round((currentTomorrowLow * 1.8) + 32);

        document.getElementById("fridayHigh").innerHTML = Math.round((currentFridayHigh * 1.8) + 32);
        document.getElementById("fridayLow").innerHTML = Math.round((currentFridayLow * 1.8) + 32);

        document.getElementById("saturdayHigh").innerHTML = Math.round((currentSaturdayHigh * 1.8) + 32);
        document.getElementById("saturdayLow").innerHTML = Math.round((currentSaturdayLow * 1.8) + 32);
    } else {
        document.getElementById("todayHigh").innerHTML = currentTodayHigh;
        document.getElementById("todayLow").innerHTML = currentTodayLow;

        document.getElementById("tomorrowHigh").innerHTML = currentTomorrowHigh;
        document.getElementById("tomorrowLow").innerHTML = currentTomorrowLow;

        document.getElementById("fridayHigh").innerHTML = currentFridayHigh;
        document.getElementById("fridayLow").innerHTML = currentFridayLow;

        document.getElementById("saturdayHigh").innerHTML = currentSaturdayHigh;
        document.getElementById("saturdayLow").innerHTML = currentSaturdayLow;
  }
}
