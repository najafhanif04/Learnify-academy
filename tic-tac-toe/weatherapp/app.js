let apikey = "969ced36d86fbd2515ff5a5283df4232";


let cityname = document.querySelector(".weather_city");
let weathertemp = document.querySelector(".weather_temp");
let para = document.getElementById("demo");
let weath = document.getElementById("weath");
let weatherhumidity = document.querySelector(".weather_humidity");
let weatherwind = document.querySelector(".weather_wind");
let weatherspeed = document.querySelector(".weather_speed");
let weathericon = document.querySelector(".weather_icon");
let weathersky = document.querySelector(".weather_sky");

// search
document.querySelector(".weather__search").addEventListener("submit", (e) => {
  let search = document.getElementById("inputVal");
  // prevent default action
  e.preventDefault();
  // change current city

  // get weather forecast
  weatherfunc();
  // clear form
  search.value = "";
});

// convert country code to name



let weatherfunc = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=${apikey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      cityname.innerHTML = `${data.name}`;
      weathertemp.innerHTML = `${data.main.temp}&#176`;
      para.innerHTML = `${data.main.feels_like}&#176`;
      weath.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    
      weatherhumidity.innerHTML = `${data.main.humidity}%`;
      weatherwind.innerHTML = `${data.wind.speed}`;
      weatherspeed.innerHTML = `${data.main.pressure}`;
      weathersky.innerHTML = `${data.weather[0].main}`;
      console.log(data);
    });
};

