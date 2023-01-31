const { Schema,model,default: mongoose } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Objectid,
            default: new Objectid
        },

        reactionBody: {
            type: String,
            require: true,
            maxlength: 2280
        },

        username: {
            type: String,
            require: true
        },

        createAt: {
            type: Date,
            default: DataTransfer.now,
            get: date => moment(data).format("MMM DD, YYYY [at] hh:mm a")
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const Reaction = model("reaction",reactionSchema);

model.exports = Reaction;
