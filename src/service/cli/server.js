'use strict';

const express = require(`express`);
const {
  HttpCode
} = require(`../constants`);

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

const routes = {
  posts: require(`./api/posts`)
};

const {
  getJsonError
} = require(`./helpers`);

app.use(`/posts`, routes.posts);
app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .json(getJsonError(HttpCode.NOT_FOUND, {
    message: `Not found`
  })));

module.exports = {
  name: `--server`,
  run(args) {
    const port = Number.parseInt(args, 10) || DEFAULT_PORT;
    app.listen(port);
  }
};
