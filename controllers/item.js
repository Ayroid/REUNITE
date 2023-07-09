const ITEM = require('../models/item');
const getData = async (req, res) => {
    
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1)*limit;

    const result = result.skip(skip)

    const items = await ITEM.find({});
    res.status(200).json({});
}

const getSimilarData = async (req, res) => {
    res.send('get similar items');
}

module.exports = { getData, getSimilarData };