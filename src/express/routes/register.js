'use strict';

const {
  Router
} = require(`express`);
const register = new Router();

register.get(`/`, (req, res) => {
  res.render(`auth/sign-up`, {
    active: 'signIn'
  })
});

module.exports = register;
