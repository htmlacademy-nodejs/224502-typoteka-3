'use strict';

const fs = require(`fs`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const {
  getRandomInt,
  shuffle,
  getRandomDate,
  formatDate
} = require(`../utils`);

const {
  ExitCode
} = require(`../constants`);

const TITLES = [
  `Ёлки. История деревьев`,
  `Как перестать беспокоиться и начать жить `,
  `Как достигнуть успеха не вставая с кресла `,
  `Обзор новейшего смартфона`,
  `Лучшие рок-музыканты 20-века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`
];

const TEXTES = [
  `Ёлки — это не просто красивое дерево. Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок-музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
  `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать? Для начала просто соберитесь.`,
  `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`,
  `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`
];

const CATEGORIES = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`
];

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
  run(count) {
    try {
      const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
      const content = JSON.stringify(generateOffers(countOffer));
      if (countOffer > 1000) {
        throw new Error(`Не больше 1000 публикаций`);
      }
      fs.writeFile(FILE_NAME, content, (err) => {
        if (err) {
          throw new Error(`Can't write data to file...`);
        }
        return console.info(`Operation success. File created.`);
      });
    } catch (e) {
      console.error(e);
      process.exit(ExitCode.error);
    }
  }
}
