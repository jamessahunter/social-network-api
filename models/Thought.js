const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, unique: true, min: 1, max: 280 },
    createdAt: {type: Date, default: Date.now},
    username: { type: String, required: true},
    reactions: {}
})

const Thought = mongoose.model('Thought',thoughtSchema);

module.exports = Thought