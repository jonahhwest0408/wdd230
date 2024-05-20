const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = 'f2aba750cc91e04238f7ab68fcceef0a'
const myLat = '33.53000279766409' 
const myLong = '-111.94190672427514'

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
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
  

apiFetch();
