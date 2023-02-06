const { Thought } = require("../models");

module.exports = {

    // get endpoints

    getThought(req,res) {
        Thought.find()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req,res) { // FIXME
        Thought.findOne({ _id: req.params.thoughtId })
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No Thought Found" })
                    : res.json(data)
            );
    },

    // post endpoints

    createThought(req,res) {
        Thought.create(req.body)
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No Thought found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    },

    createReaction(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } }
        )
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No thought found" })
                    : res.json(data)
            )
            .catch((err) => res.json(err));
    },

    // put endpoints

    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No  Thought Found " })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    },


    // delete endpoints

    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })

            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No Thought Found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    },

    deleteReaction(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } }
        )
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No reaction found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    }


};
