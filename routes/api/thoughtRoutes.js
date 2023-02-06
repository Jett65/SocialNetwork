const router = require("express").Router();

const {
    getThought,
    getSingleThought,
    createThought,
    createReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require("../../controllers/thoughtController");

// api/thoughts
router.route("/").get(getThought).post(createThought);

// api/thoughts/:id
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// api/thoughts/:thought-id/reactions/:reaction-id:

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;