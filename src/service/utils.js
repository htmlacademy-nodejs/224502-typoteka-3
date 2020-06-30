'use strict';

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }
  return someArray;
};

module.exports.getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports.formatDate = (date) => {
  let day = (`0${date.getDate()}`).slice(-2);
  let month = (`0${(date.getMonth() + 1)}`).slice(-2);
  let year = date.getFullYear();
  let hours = (`0${(date.getHours())}`).slice(-2);
  let minutes = (`0${(date.getMinutes())}`).slice(-2);
  let seconds = (`0${(date.getSeconds())}`).slice(-2);
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
