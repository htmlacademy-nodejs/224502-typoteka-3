'use strict';

const {
  Router
} = require(`express`);
const articles = new Router();

articles.get(`/category/:id`, (req, res) => {
  res.render(`articles/articles-by-category`);
});
articles.get(`/add`, (req, res) => {
  res.render(`articles/new-post`, {
    empty: true
  });
});
articles.get(`/edit/:id`, (req, res) => {
  res.render(`articles/new-post`, {
    empty: false
  });
});
articles.get(`/:id`, (req, res) => {
  res.render(`articles/post`);
});

module.exports = articles;
