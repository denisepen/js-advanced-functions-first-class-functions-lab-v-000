// Code your solution in this file!
const drivers = ["huey", "dewey", "louis"]
  const returnFirstTwoDrivers = function (drivers) {
  let newArray = []
  newArray.push(drivers[0])
  newArray.push(drivers[1])
  return newArray
}


const returnLastTwoDrivers = function(drivers){
  let newArray = []
  newArray.push(drivers[-1])
  newArray.push(drivers[-2])
  return newArray
  }