const express = require('express');
const claimRouter = express.Router();
const {VERIFYTOKEN} = require('../authentication/jwt');

const { claim } = require('../controllers/claim');

claimRouter.post('/claim/:itemId',VERIFYTOKEN, claim);



module.exports = claimRouter;
