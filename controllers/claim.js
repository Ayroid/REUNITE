const { ITEM } = require('../models/item');
const claim = async (req, res) => {
    const { userId, username } = req.body.payload;

    const {id:itemId} = req.params;

const updateClaim = await ITEM.findOneAndUpdate(
  { _id: itemId },
  { $push: { claimers: userId } },
  { new: true }
);
res.status(200).json('claim sucessffull')

}

module.exports = { claim };