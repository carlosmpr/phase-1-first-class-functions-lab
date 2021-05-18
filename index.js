// Code your solution in this file!
const returnFirstTwoDrivers = (array) => array.slice(0,2)
const  returnLastTwoDrivers = (array) => array.slice(array.length-2,array.length)
const selectingDrivers = [ returnFirstTwoDrivers , returnLastTwoDrivers]
const createFareMultiplier = num => (b)=> num *b

const fareDoubler = num => num *2
const fareTripler = num => num *3

const selectDifferentDrivers = (array , fun) => fun(array)