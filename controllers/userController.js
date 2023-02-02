const { User } = require("../models");

module.exports = {
    // get endpoints

    getUser(req,res) {
        User.find()
            .then((users) =>
                !users
                    ? res.status(404).json({ massage: "No user found" })
                    : res.json(users)
            )
            .catch((err) => res.status(500).json(err));
    },

    // getSingleUser(req,res) {
    //     User.findOne({ _id: req.prams.userId },{ _id: 1,username: 1,email: 0,thoughts: 1,friends: 1 })
    //         .select("-__v")
    //         .then((user) =>
    //             !user
    //                 ? res.status(404).json({ message: "No user found" })
    //                 : res.json(user)
    //         );
    // },

    // // post endpoints

    createUser(req,res) {
        User.create(req.body)
            .then((userData) =>
                !userData
                    ? res.status(404).json({ message: "No user found" })
                    : res.json(userData)
            )
            .catch((err) => res.status(500).json(err));
    },

    // createNewFriend(req,res) {
    //     User.findOneAndUpdate(
    //         { _id: req.prams.userId },
    //         { $push: { friends: req.prams.friendId } },
    //         { new: true }
    //     )
    //         .then((userData) =>
    //             !userData
    //                 ? res.status(404).json({ message: "No user found" })
    //                 : res.json(userData)
    //         )
    //         .catch((err) => res.status(500).json(err));

    // },

    // // put endpoints

    // updateUser(req,res) {
    //     User.findOneAndUpdate(
    //         { _id: req.prams.userId },
    //         { $set: req.body },
    //         { new: true }
    //     )
    //         .then((data) =>
    //             !data
    //                 ? res.status(404).json({ message: "No user found" })
    //                 : res.json(data)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // },

    // // delete endpoints

    // deleteUser(req,res) {
    //     User.delete({ _id: req.prams.userId })

    //         .then((data) =>
    //             !data
    //                 ? res.status(404).json({ message: "No user found" })
    //                 : res.json(data)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // },

    // deleteFriend(req,res) {
    //     User.findOneAndUpdate(
    //         { _id: req.prams.userId },
    //         { $pull: { friends: req.prams.friendId } }
    //     )
    //         .then((data) =>
    //             !data
    //                 ? res.status(404).json({ message: "No friend found" })
    //                 : res.json(data)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // }
};
