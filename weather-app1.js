let citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "Sunny",
    humidity: 23,
    windSpeed: 32,
  },
  shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 14,
  },
  tabriz: {
    city: "Tabriz",
    temp: 1,
    weather: "rainy",
    humidity: 43,
    windSpeed: 12,
  },
  mashhad: {
    city: "Mashhad",
    temp: 16,
    weather: "snowy",
    humidity: 7,
    windSpeed: 24,
  },
  esfahan: {
    city: "Esfahan",
    temp: 23,
    weather: "Sunny",
    humidity: 15,
    windSpeed: 18,
  },
};

let $ = document;
let searchBtn = $.getElementById("search");
let searchBar = $.querySelector(".search-bar");

searchBtn.addEventListener("click", function () {
  let searchBarValue = searchBar.value; // tabriz//    instead of innerHTML==> value
  let mainCityDatas = citiesData[searchBarValue]; // it is for object in Array yyoun need to use find

  console.log(mainCityDatas);
  if (mainCityDatas) {
    //it is an object and Boolean({})=truthy value
    $.querySelector(".weather").classList.remove("loading");
    $.querySelector(".city").innerHTML = "Wheather in" + mainCityDatas.city;
    $.querySelector(".temp").innerHTML = mainCityDatas.temp + "°C";
    $.querySelector(".description").innerHTML = mainCityDatas.weather;
    $.querySelector(".wind").innerHTML =
      "wind speed:" + mainCityDatas.wind + "km/h";
    $.querySelector(".humidity").innerHTML =
      "Humidity: " + mainCityDatas.humidity;
  } else {
    alert("Plaese enter the valid city");
  }
});
