document.addEventListener("DOMContentLoaded", () => {
  const updateInterface = () => {
    document.querySelector("#temperature").innerHTML =
      "The temperature in this room is: " + thermostat.temperature + "°C";
    document.querySelector("#temperature").className = thermostat.energyUsage();

    document.querySelector("#power-saving-mode").innerHTML =
      thermostat.isPowerSavingModeOn() ? "ON" : "OFF";
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
