const express = require('express');
const itemRouter = express.Router();

const { getData, getSimilarData } = require('../controllers/item');

itemRouter.post('/getData', getData);
itemRouter.post('/getSimilarData', getSimilarData);

module.exports = itemRouter;