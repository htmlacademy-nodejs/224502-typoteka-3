'use strict';

const {
  Router
} = require(`express`);
const categories = new Router();

categories.get(`/`, (req, res) => {
  res.render(`categories/all-categories`);
});

module.exports = categories;
