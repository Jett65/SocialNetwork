const { Thought } = require("../models");

module.exports = {

    // get endpoints

    getThought(req,res) { // FIXME
        Thought.find()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("__v")
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No Thought Found" })
                    : res.json(data)
            );
    },

    // post endpoints

    createThought(req,res) { // FIXME 
        Thought.create(req.body)
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No Thought found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    },

    createReaction(req,res) { // FIXME
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

    updateThought(req,res) { // FIXME 
        Thought.findOneAndUpdate(
            { _id: req.params.body },
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

    deleteThought(req,res) { // FIXME 
        Thought.findOneAndDelete({ _id: req.params.id })

            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No Thought Found" })
                    : res.json(data)
            )
            .then(() => res.json({ message: "Thought deleted" }))
            .catch((err) => res.status(500).json(err));
    },

    deleteReaction(req,res) { // FIXME 
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: req.params.reactionId } }
        )
            .then((data) =>
                !data
                    ? res.status(404).json({ message: "No reaction found" })
                    : res.json(data)
            )
            .catch((err) => res.status(500).json(err));
    }


};
