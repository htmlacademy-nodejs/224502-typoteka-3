'use strict';

const express = require(`express`);

const routes = {
  index: require(`./routes/index`),
  register: require(`./routes/register`),
  login: require(`./routes/login`),
  my: require(`./routes/my`),
  articles: require(`./routes/articles`),
  search: require(`./routes/search`),
  categories: require(`./routes/categories`)
};

const app = express();
app.use(`/`, routes.index);
app.use(`/register`, routes.register);
app.use(`/login`, routes.login);
app.use(`/my`, routes.my);
app.use(`/articles`, routes.articles);
app.use(`/search`, routes.search);
app.use(`/categories`, routes.categories);

const port = 8080;
app.listen(port);
