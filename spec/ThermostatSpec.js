describe("Thermostat", function() {
  'use strict'

  let thermostat;

  beforeEach(() => {
   thermostat = new Thermostat();
  });

  it("should have a start temperature of 20 degrees", function() {
    expect(thermostat.getTemperature()).toEqual(20);
   })

   it("should be possible to increase the temperature of 1 degree", function() {
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21);
   })

   it("should be possible to decrease the temperature of 1 degree", function() {
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
   })

   it("should be possible to increase the temperature", function() {
    thermostat.increaseTemp(5)
    expect(thermostat.getTemperature()).toEqual(25);
   })

   it("should be possible to decrease the temperature", function() {
    thermostat.decreaseTemp(5)
    expect(thermostat.getTemperature()).toEqual(15);
   })

   it("should have a minimum temperature of 10 degrees", function() {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  })

  it('has power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it('can turn off the power saving mode', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  })

  it('can switch PSM back on', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

   it("should have a maximum temperature of 25 degrees when power save is on", function() {
    expect(thermostat.MAX_TEMP_PSM_ON ).toEqual(25);
   })

   it("should have a maximum temperature of 32 degrees when power save is off", function() {
    thermostat.switchPowerSavingModeOff()
    expect(thermostat.MAX_TEMP_PSM_OFF).toEqual(32);
   })

   it("should reset the temperature to 20 degrees", function() {
    thermostat.increaseTemp(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
   })

   it("should show the energy usage as medium-usage when <=25", function() {
    expect(thermostat.energyUsage()).toEqual("medium-usage");
   })

   it("should show the energy usage as low-usage when <18", function() {
    thermostat.decreaseTemp(5)
    expect(thermostat.energyUsage()).toEqual("low-usage");
   })

   it("should show the energy usage as high-usage otherwise", function(){ 
    thermostat.increaseTemp(10)
    expect(thermostat.energyUsage()).toEqual("high-usage");
   })

  });