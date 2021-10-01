'use strict'
class Thermostat {
  constructor () {
      this.DEFAULT_TEMPERATURE = 20;
      this.temperature = this.DEFAULT_TEMPERATURE;
      this.MINIMUM_TEMPERATURE = 10;
      this.MAX_TEMP_PSM_ON = 25;
      this.MAX_TEMP_PSM_OFF = 32;
      this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
      this.HIGH_ENERGY_USAGE_LIMIT = 25;
      this.powerSavingMode = true 
      
  }

  getTemperature() {
    return this.temperature;
  }

  up(){
   this.increaseTemp(1)
  }

  down(){
    this.decreaseTemp(1)
  }
  increaseTemp(increase) {
    if (this.isMaxTemperature(increase)){
      return;
    }
    this.temperature += increase;
  }

  decreaseTemp(decrease) {
    if (this.minimumTemperature(decrease)){
      return;
    }
    this.temperature -= decrease;
  }

  minimumTemperature(decrease) {
    return (this.temperature - decrease) < this.MINIMUM_TEMPERATURE;
  }

  isMaxTemperature(increase){
    if( this.isPowerSavingModeOn() === false){
      return (this.temperature + increase) > this.MAX_TEMP_PSM_OFF;
    }
    return (this.temperature + increase) > this.MAX_TEMP_PSM_ON;
  }

  isPowerSavingModeOn(){
    return this.powerSavingMode;
  }

  switchPowerSavingModeOff(){
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE
  }

  energyUsage() {
    if ( this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return "low-usage";
    }
    else if ( this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT){
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  }

};