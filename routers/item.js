const express = require('express');
const itemRouter = express.Router();

const { getData, createItem } = require('../controllers/item');

itemRouter.get('/getData', getData)
itemRouter.post('/create', createItem);

module.exports = itemRouter;