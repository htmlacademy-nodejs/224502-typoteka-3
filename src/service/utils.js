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

const getDateStringItem = (date) => {
  return (`0${date}`).slice(-2);
};

module.exports.formatDate = (date) => {
  const day = getDateStringItem(date.getDate());
  const month = getDateStringItem(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = getDateStringItem(date.getHours());
  const minutes = getDateStringItem(date.getMinutes());
  const seconds = getDateStringItem(date.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
