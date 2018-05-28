// Code your solution in this file!
const drivers = ["huey", "Freddy", "Claudia"]
  const returnFirstTwoDrivers = function (drivers) {
  let newArray = []
  newArray.push(drivers[0])
  newArray.push(drivers[1])
  return newArray
}


const returnLastTwoDrivers = function(drivers){
  let newArray = []

  newArray.push(drivers[drivers.length - 2])
  newArray.push(drivers[drivers.length - 1])
  return newArray
  }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare){
    return int * fare
  }
}

const fareDoubler = createFareMultiplier(2);
