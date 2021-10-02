document.addEventListener("DOMContentLoaded", () => {
  const updateInterface = () => {
    document.querySelector("#temperature").innerHTML =
      "The temperature in this room is: " + thermostat.temperature + "°C";
    document.querySelector("#temperature").className = thermostat.energyUsage();

    document.querySelector("#power-saving-mode").innerHTML =
      thermostat.isPowerSavingModeOn() ? "ON" : "OFF";
      
      const displayWeather = (city) => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
      fetch(url).then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector("#current_temperature").innerHTML = data.main.temp;
      })
    }
    const city = document.querySelector("#city");
    city.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
       let cityUpdated = city.value;
       displayWeather(cityUpdated)
      }
    });
  };

  const thermostat = new Thermostat();
  updateInterface();

  document.querySelector("#up").addEventListener("click", () => {
    thermostat.up();
    updateInterface();
  });

  document.querySelector("#down").addEventListener("click", () => {
    thermostat.down();
    updateInterface();
  });

  document.querySelector("#reset").addEventListener("click", () => {
    thermostat.reset();
    updateInterface();
  });

  document.querySelector("#switch_on").addEventListener("click", () => {
    thermostat.switchPowerSavingModeOn();
    updateInterface();
  });

  document.querySelector("#switch_off").addEventListener("click", () => {
    thermostat.switchPowerSavingModeOff();
    updateInterface();
  });

  document.getElementById("increase").addEventListener("click", () =>{
    let increase = parseInt(document.getElementById("degrees").value)
    thermostat.increaseTemp(increase)
    updateInterface();
  })
  document.getElementById("decrease").addEventListener("click", () =>{
    let decrease = parseInt(document.getElementById("degrees").value)
    thermostat.decreaseTemp(decrease)
    updateInterface();
  })
});
