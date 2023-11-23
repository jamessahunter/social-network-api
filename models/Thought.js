const {Schema, model} = require('mongoose');

const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
    thoughtText: { type: String, unique: true, min: 1, max: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals:true
        },
        id: false,
    }
)

thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought',thoughtSchema);

module.exports = Thought