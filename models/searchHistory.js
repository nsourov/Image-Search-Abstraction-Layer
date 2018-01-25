const mongoose = require('mongoose');
const histroySchema  = new mongoose.Schema({
    searched: String,
    time: Date
})

module.exports = mongoose.model('Searched', histroySchema)