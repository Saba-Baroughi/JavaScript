let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");
let countriesData = {
  Iran: ["Tabriz", "Tehran", "Mashhad"],
  Turkey: ["Ankara", "Izmir", "Urfa"],
  US: ["California", "San Diago", "Washington"],
};

countrySelectBox.addEventListener("change", function () {
  if (countrySelectBox.value === "please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option> Select City </option>"; //difference
  } else {
    let mainCountryName = countrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
    //Now we want use forEach to show each cities seprately
    citySelect.innerHTML = ""; //first clear then add cities
    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>"; //difference
      console.log(city);
    });
  }
});
