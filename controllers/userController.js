const { User } = require("../models");

module.exports = {
    // get endpoints

    getUser(req,res) {
        User.find()
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req,res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user found" })
                    : res.json(user)
            );
    },

    // post endpoints

    createUser(req,res) {
        User.create(req.body)
            .then((userData) =>
                !userData
                    ? res.status(404).json({ message: "No user found" })
                    : res.json(userData)
            )
            .catch((err) => res.status(500).json(err));
    },

    createNewFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true }
        )
            .then((userData) =>
                !userData
                    ? res.status(404).json({ message: "No user found" })
                    : res.json(userData)
            )
            .catch((err) => res.status(500).json(err));

    },

    //  put endpoints

    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        )
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No user found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    },

    // delete endpoints

    deleteUser(req,res) {
        User.findOneAndDelete({ _id: req.params.userId })

            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No user found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    },

    deleteFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } }
        )
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No friend found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    }
};
