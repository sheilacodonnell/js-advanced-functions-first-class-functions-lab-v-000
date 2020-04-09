const returnFirstTwoDrivers = 
  function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers =
  function(drivers) {
    return drivers.slice(drivers.length - 2) 
  }
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  
}