// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arrDrivers) {
    return arrDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrDrivers) {
    return arrDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// Double Check //
function createFareMultiplier(fare) {
    return function() {
        return fare * fare;
    }
}

const fareDoubler = (createFareMultiplier) => {return createFareMultiplier * 2}

const fareTripler = (createFareMultiplier) => {return createFareMultiplier * 3}

// Double Check //
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}