const express = require('express');
const itemRouter = express.Router();

const { getData, createItem } = require('../controllers/item');
const { VALIDATEITEM } = require('../middleware/user');

itemRouter.get('/getData', getData)
itemRouter.post('/create', VALIDATEITEM, createItem);

module.exports = itemRouter;