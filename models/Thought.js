const { Schema,model } = require('mongoose');

// Reaction subdocument
const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Objectid,
            default: new Objectid
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
            default: DataTransfer.now,
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
            type: Data,
            default: Date.now,
            //TODO: use getter to format the date
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
            getters: true
        },
        id: false
    }
);

thoughtsSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("thought",thoughtsSchema);

model.exports = Thought;