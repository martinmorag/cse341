const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.worldRoute);
routes.get('/name', lesson1Controller.nameRoute);

module.exports = routes;