// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
    return function(fare) {
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, f) {
    return f(arr)
}