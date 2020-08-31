'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const path = require(`path`);

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

const FILE_SENTENCES_PATH = path.resolve(__dirname, `../../../data/sentences.txt`);
const FILE_TITLES_PATH = path.resolve(__dirname, `../../../data/titles.txt`);
const FILE_CATEGORIES_PATH = path.resolve(__dirname, `../../../data/categories.txt`);

const getRandomText = (arr, max) => {
  let sliceTo = max || getRandomInt(1, arr.length);
  return shuffle(arr).slice(0, sliceTo).join(` `);
};

const getMonthesRandomDate = (monthesCount) => {
  let minDate = new Date();
  minDate.setMonth(minDate.getMonth() - monthesCount);
  return formatDate(getRandomDate(minDate, new Date()));
};

const generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    announce: getRandomText(sentences, 5),
    fullText: getRandomText(sentences),
    сategory: shuffle(categories).slice(1, getRandomInt(2, 10)),
    createdDate: getMonthesRandomDate(3)
  }))
);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (e) {
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(count) {
    try {
      const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
      const sentences = await readContent(FILE_SENTENCES_PATH);
      const titles = await readContent(FILE_TITLES_PATH);
      const categories = await readContent(FILE_CATEGORIES_PATH);
      const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences));
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
};
