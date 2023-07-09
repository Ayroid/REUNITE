const express = require('express');
const userRouter = express.Router();


const { login, register } = require('../controllers/user');

userRouter.post('/login', login);
userRouter.post('/register', register);

module.exports = userRouter;
