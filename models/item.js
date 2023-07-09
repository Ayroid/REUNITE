const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true,"please provide name"],
    },
    imageURL: {
        type: String,
        required: [trur,"please provide image url"],
    },
    description: {
        type: String,
        required: [true,"please provide description"],
    },
    locationCoordinates: {
        type: Object,  // {lat: 123, long: 123}
    },
    location: {
        type: String,
        required: [true,"please provide your location"],
    },
    timeReported: {
        type: Date,
        required: true,
        default: Date.now()
    },
    userIds: {
        type: Array,
        required: true,
        default: []
    },
});

const item = mongoose.model('item', itemSchema);

module.exports = {
    ITEM: item
};