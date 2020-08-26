'use strict';

const {
  Router
} = require(`express`);
const articles = new Router();

articles.get(`/category/:id`, (req, res) => res.send(`/articles/category/${req.params.id}`));
articles.get(`/add`, (req, res) => res.send(`/add`));
articles.get(`/edit/:id`, (req, res) => res.send(`/articles/edit/${req.params.id}`));
articles.get(`/:id`, (req, res) => res.send(`/articles/${req.params.id}`));

module.exports = articles;
