const express = require('express');
const itemRouter = express.Router();

const { getData, getSimilarData, createItem } = require('../controllers/item');

itemRouter.get('/getData', getData)
itemRouter.get('/getSimilarData', getSimilarData);
itemRouter.post('/create', createItem);

module.exports = itemRouter;