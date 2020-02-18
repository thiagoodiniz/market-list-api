const mongoose = require('../database');

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    market: {
        type: String,
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;