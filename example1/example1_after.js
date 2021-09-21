const OVERNIGHT_RATE = 3.90;
const SUNDAY_RATE = 2.9;
const NORMAL_RATE = 2.10;

const isOvernight = function (date) {
    return date.getHours() >= 22;
}

const isSunday = function (date) {
    return date.getDay() === 0;
}

const calculateRate = function (distance, rate) {
    return distance * rate;
}

const calculateRide = function(distance, date) {
    if (typeof distance !== "number") throw new Error("Invalid parameter");
    if (isOvernight(date)) return calculateRate(distance, OVERNIGHT_RATE); 
    if (isSunday(date)) return calculateRate(distance, SUNDAY_RATE);
    return calculateRate(distance, NORMAL_RATE);
}

module.exports = {
    isOvernight,
    isSunday,
    calculateRide
}
