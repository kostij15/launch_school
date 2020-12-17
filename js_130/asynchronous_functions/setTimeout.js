"use strict";
//1. delayLog
//loops through the numbers from 1-10, logs each aft that number of seconds

function delayLog() {
  for (let second = 1; second <= 10; second++) {
    setTimeout(function () {
      console.log(second);
    }, second * 1000);
  }
}

delayLog();