const { Schema,model } = require('mongoose');

//Schema to create the user
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },

        email: {
            type: String,
            require: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gim.test(v);
                },
                message: props => `${props.value} is not a valid email!`
            }
        },

        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },

        friends: {
            type: Schema.Types.ObjectId
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("user",userSchema);

module.exports = User;