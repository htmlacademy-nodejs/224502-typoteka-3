'use strict';

const express = require(`express`);
const path = require(`path`);

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

app.set(`views`, path.resolve(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, `./public`)));
app.use(`/`, routes.index);
app.use(`/register`, routes.register);
app.use(`/login`, routes.login);
app.use(`/my`, routes.my);
app.use(`/articles`, routes.articles);
app.use(`/search`, routes.search);
app.use(`/categories`, routes.categories);

app.use((req, res, next) => {
  res.status(404).render(`errors/400`, {
    logoClass: `header__logo--404`
  });
  next();
});
app.use((err, req, res, next) => {
  res.status(500).render(`errors/500`, {
    logoClass: `header__logo--500`
  });
  next();
});


const port = 8081;
app.listen(port);
