const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/marketlist', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;