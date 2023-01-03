const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const responsiveDiv = document.getElementById("small-devices");

openBtn.addEventListener("click", () => {
  responsiveDiv.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  responsiveDiv.style.display = "none";
  openBtn.style.display = "block";
});

// Code for Weather page:
const newDay = document.getElementById("curr_day");
const newDate = document.getElementById("curr_date");
newDate.innerHTML = new Date().toLocaleDateString();
switch (new Date().getDay()) {
  case 0:
    newDay.innerHTML = "Sunday";
    break;
  case 1:
    newDay.innerHTML = "Monday";
    break;
  case 2:
    newDay.innerHTML = "Tuesday";
    break;
  case 3:
    newDay.innerHTML = "Wednesday";
    break;
  case 4:
    newDay.innerHTML = "Thursday";
    break;
  case 5:
    newDay.innerHTML = "Friday";
    break;
  case 6:
    newDay.innerHTML = "Saturday";
}

const inputCity = document.getElementById("search_text");
const output_city = document.getElementById("weather_output_city");
const submit_btn = document.getElementById("submit_btn");
const temp = document.getElementById("degree");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".weather_output");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = inputCity.value;
  if (cityVal === "") {
    output_city.innerText = `Please type the valid city name.`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=97a547303272f0dffba4d6616d02e416`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      // console.log(data);
      output_city.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
      const tempMood = arrData[0].weather[0].main;
      // console.log(tempMood);
      if (tempMood == "Clear") {
        temp_status.src = "https://img.icons8.com/emoji/48/null/sun-emoji.png";
      } else if (tempMood == "Rain") {
        temp_status.src =
          "https://img.icons8.com/arcade/64/null/torrential-rain.png";
      } else if (tempMood == "Snow") {
        temp_status.src =
          "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-snowfall-weather-flaticons-lineal-color-flat-icons.png";
      } else if (tempMood == "Clouds") {
        temp_status.src = "https://img.icons8.com/arcade/48/null/clouds.png";
      } else {
        temp_status.src = "https://img.icons8.com/emoji/48/null/sun-emoji.png";
      }
      dataHide.classList.remove("data_hide");
    } catch {
      output_city.innerText = `Please type the valid city name.`;
      dataHide.classList.add("data_hide");
    }
  }
};

submit_btn.addEventListener("click", getInfo);
