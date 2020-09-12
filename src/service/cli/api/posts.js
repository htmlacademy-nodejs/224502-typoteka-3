'use strict';

const fs = require(`fs`).promises;
const {
  HttpCode
} = require(`../../constants`);
const {
  createRouter
} = require(`../helpers`);

const posts = createRouter();
const FILENAME = `mocks.json`;

posts.get(`/`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res
      .status(HttpCode.OK)
      .json([]);
  }
});

module.exports = posts;
