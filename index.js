const returnFirstTwoDrivers = 
  function(drivers) {
  return [drivers[0], drivers[1]]
}

const lastTwoDrivers =
  function(drivers) {
    return drivers.slice(drivers.length - 2) 
  }