"use strict";
//Problem: given a year, month number, day of week, designation day

//1. collect the days within those months
//2. based on the suffix
// first -> first day of week on the calendar
// second -> second day of calendar
// third -> third day of calendar
// fourth -> fourth day of calendar
// fifth -> fifth day of calendar
// teenth -> first day greater than 12
//3. return as a date object

function meetupDay(year, monthNum, dayOfWeekName, suffix) {
  let possibleMeetupDays = collectDaysOfWeek(year, monthNum, dayOfWeekName);
  let possibleDay = confirmedDay(possibleMeetupDays, suffix);

  return new Date(year, monthNum, possibleDay);
}

function collectDaysOfWeek(year, monthNum, dayOfWeekName) {
  const daysOfWeek = {
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
    'sunday': 0
  }

  let possibleMeetupDays = [];
  dayOfWeekName = dayOfWeekName.toLowerCase()

  let dayOfWeekNum = daysOfWeek[dayOfWeekName];
  let daysInMonth = new Date(year, monthNum + 1, 0).getDate();
  // console.log(daysInMonth);

  for (let day = 1; day <= daysInMonth; day++) {
    let date = new Date(year, monthNum, day);
    if (date.getDay() === dayOfWeekNum) {
      possibleMeetupDays.push(day);
    }
  }
  // console.log(possibleMeetupDays);
  return possibleMeetupDays;
}

function confirmedDay(array, suffix) {
  const possibleSuffix = {
    '1st': array[0],
    '2nd': array[1],
    '3rd': array[2],
    '4th': array[3],
    '5th': array[4],
    'last': array[array.length - 1],
  };

  let day;

  if (possibleSuffix.hasOwnProperty(suffix)) {
    day = possibleSuffix[suffix];
  } else {
    day = array.find(date => date > 12);
  }

  if (!day) {
    throw new Error();
  }

  return day;
}
module.exports = meetupDay;