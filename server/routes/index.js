const apiRouter = require('express').Router();
const usersRouter = require('/student')

apiRouter.use('./users', usersRouter);

module.exports = apiRouter;
