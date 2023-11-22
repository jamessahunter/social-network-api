const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {},
    reactionBody: { type: String, required: true, max: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now},
})

// const Reaction = mongoose.model('Reaction',reactionSchema);

module.exports = reactionSchema;