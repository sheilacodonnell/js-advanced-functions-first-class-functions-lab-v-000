const returnFirstTwoDrivers = 
  function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers =
  function(drivers) {
    return drivers.slice(drivers.length - 2) 
  }
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = 
  function(multiply) {
    return function(fare) {
      return fare * multiply
    }
  
}

const fareDoubler = function(){
  createFareMultiplier() * 2
}