const appKey = "48d33ecac4f045baaaa80bc10b7783eb";

let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("search");
let cityName = document.getElementById("cityname");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity");

searchButton.addEventListener("click", weatherDetails);
searchInput.addEventListener("keyup", enterPress);

function enterPress(event) {
  if (event.key === "Enter") {
    weatherDetails();
  }
}

function weatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, response);
  }
 }

function response(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => { 
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
          callback(httpRequest.responseText);
  }
  httpRequest.open("GET", url, true); // true for asynchronous 
  httpRequest.send();
}