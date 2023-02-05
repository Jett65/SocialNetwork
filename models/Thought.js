const { Schema,model,mongoose } = require('mongoose');

// Reaction subdocument
const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.ObjectId,
            default: () => new TYPES.ObjectId
        },

        reactionBody: {
            type: String,
            require: true,
            maxlength: 280
        },

        username: {
            type: String,
            require: true
        },

        createAt: {
            type: Date,
            default: Date.now,
            //TODO: use getter to format date
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            maxlength: 280,
            minlength: 1
        },

        createdAt: {
            type: Date,
            default: Date.now,
            //TODO: use getter to format the date
        },

        username: { // The user that created this thought 
            type: String,
            require: true
        },

        reactions: [reactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtsSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("thought",thoughtsSchema);

module.exports = Thought;