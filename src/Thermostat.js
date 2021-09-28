'use strict'
class Thermostat {
  constructor () {
      this.DEFAULT_TEMPERATURE = 20;
      this.temperature = this.DEFAULT_TEMPERATURE;
      this.minimumTemp = 10;
      this.MAX_TEMP_PSM_ON = 25;
      this.MAX_TEMP_PSM_OFF = 32;
      this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
      this.HIGH_ENERGY_USAGE_LIMIT = 25;
      
  }

  getTemperature() {
    return this.temperature;
  }

  up(){
    return this.temperature += 1;
  }

  down(){
    return this.temperature -= 1;
  }

  increaseTemp(increase) {
    this.temperature += increase;
  }

  decreaseTemp(decrease) {
    this.temperature -= decrease;
  }

  powerSaveMode(value) {
    if (value) {
      this.temperature = this.MAX_TEMP_PSM_ON;
    }
    else {
      this.temperature = this.MAX_TEMP_PSM_OFF;
    }
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE
  }

  energyUsage() {
    if ( this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return "low-usage";
    }
    else if ( this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT){
      return ("medium-usage");
    }
    else {
      return "high-usage";
    }

  }
};