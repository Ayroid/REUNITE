const express = require('express');
const claimRouter = express.Router();


const { claim } = require('../controllers/claim');

claimRouter.post('/claim', claim);

module.exports = claimRouter;
