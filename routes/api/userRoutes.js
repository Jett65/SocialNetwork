const router = require("express").Router();

const {
    getUser,
    getSingleUser,
    createUser,
    createNewFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require("../../controllers/userController");

// api/users
router.route("/").get(getUser).post(createUser);

// api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// api/users/userId/friends/friendId
router.route("/:userId/friend/:friendId").post(createNewFriend).delete(deleteFriend);

module.exports = router;