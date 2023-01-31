const { Schema,model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            maxlength: 280,
            minlength: 1
        },

        createdAt: {
            type: Data,
            default: Date.now,
            get: date => moment(date).format("MMM DD, YYYY [at] hh:mm a")
        },

        username: { // The user that created this thought 
            type: String,
            require: true
        },

        reactions: [ReactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const Thought = model("thought",thoughtsSchema);

model.exports = Thought;