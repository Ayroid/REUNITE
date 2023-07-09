const express = require('express');
const uploadsRouter = express.Router();


const { uploads } = require('../controllers/upload');

uploadsRouter.post('/upload', uploads);

module.exports = uploadsRouter;
