const ITEM = require('../models/item');
const getData = async (req, res) => {
    const items = await ITEM.fing({});
    res.status(200).json({});
}

const getSimilarData = async (req, res) => {
    res.send('get similar items');
}

module.exports = { getData, getSimilarData };