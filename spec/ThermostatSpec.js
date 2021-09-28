describe("Thermostat", function() {

  it("should have a start temperature of 20 degrees", function() {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
   })

   it("should be possible to increase the temperature", function() {
    let thermostat = new Thermostat();
    thermostat.increaseTemp(5)
    expect(thermostat.temperature).toEqual(25);
   })

   it("should be possible to decrease the temperature", function() {
    let thermostat = new Thermostat();
    thermostat.decreaseTemp(5)
    expect(thermostat.temperature).toEqual(15);
   })

   it("should have a minimum temperature of 10 degrees", function() {
    let thermostat = new Thermostat();
    expect(thermostat.minimumTemp).toEqual(10);
   })

   it("should have a maximum temperature of 25 degrees when power save is on", function() {
    let thermostat = new Thermostat();
    expect(thermostat.maximumTemp).toEqual(25);
   })

   it("should have a maximum temperature of 32 degrees when power save is off", function() {
    let thermostat = new Thermostat();
    thermostat.powerSaveMode(false)
    expect(thermostat.maximumTemp).toEqual(32);
   })
   it("should reset the temperature to 20 degrees", function() {
    let thermostat = new Thermostat();
    thermostat.increaseTemp(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
   })

   it("should show the energy usage as medium-usage when <=25", function() {
    let thermostat = new Thermostat();
    expect(thermostat.energyUsage).toEqual("medium-usage");
   })

  });