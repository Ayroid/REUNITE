const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    locationCoordinates: {
        type: Object,  // {lat: 123, long: 123}
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    timeReported: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

const item = mongoose.model('item', itemSchema);

module.exports = {
    ITEM: item
};