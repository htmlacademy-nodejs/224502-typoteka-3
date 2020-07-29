'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {
  getRandomInt,
  shuffle,
  getRandomDate,
  formatDate
} = require(`../utils`);

const {
  ExitCode
} = require(`../constants`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const getRandomText = (arr, max) => {
  let sliceTo = max || getRandomInt(1, TEXTES.length);
  return shuffle(arr).slice(0, sliceTo).join(' ');
};

const getMonthesRandomDate = (monthesCount) => {
  let minDate = new Date();
  minDate.setMonth(minDate.getMonth() - monthesCount);
  return formatDate(getRandomDate(minDate, new Date()));
};

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    announce: getRandomText(TEXTES, 5),
    fullText: getRandomText(TEXTES),
    сategory: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length)),
    createdDate: getMonthesRandomDate(3)
  }))
);

module.exports = {
  name: `--generate`,
  async run(count) {
    try {
      const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
      const content = JSON.stringify(generateOffers(countOffer));
      if (countOffer > 1000) {
        throw new Error(`Не больше 1000 публикаций`);
      }
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));
    } catch (e) {
      console.error(chalk.red(e));
      process.exit(ExitCode.error);
    }
  }
}
