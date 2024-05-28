const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const forecastContainer = document.querySelector('#forecast');

const myKey = 'f2aba750cc91e04238f7ab68fcceef0a';
const myLat = '33.53000279766409';
const myLong = '-111.94190672427514';

const myWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const myForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
  try {
    const weatherResponse = await fetch(myWeatherURL);
    const forecastResponse = await fetch(myForecastURL);

    if (weatherResponse.ok && forecastResponse.ok) {
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      console.log(weatherData); //testing only
      console.log(forecastData); //testing only
      displayResults(weatherData);
      displayForecast(forecastData);
    } else {
      throw Error(`Weather: ${await weatherResponse.text()} Forecast: ${await forecastResponse.text()}`);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.textContent = `${data.main.temp}°F`;
  myGraphic.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  myGraphic.alt = data.weather[0].description;
}

function displayForecast(data) {
  forecastContainer.innerHTML = ''; 

  const forecastList = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
  const days = forecastList.slice(0, 3);

  days.forEach((day) => {
    const date = new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    const temp = `${day.main.temp}°F`;
    const description = day.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');
    
    forecastItem.innerHTML = `
      <h3>${date}</h3>
      <p><img src="${iconSrc}" alt="${description}"></p>
      <p>${temp}</p>
      <p>${description}</p>
    `;

    forecastContainer.appendChild(forecastItem);
  });
}

apiFetch();
