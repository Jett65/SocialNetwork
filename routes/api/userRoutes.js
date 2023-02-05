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

//api/users
router.route("/").get(getUser).post(createUser);

// FIXME
// //api/users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// FIXME
// //api/users/user-id/friends/friend-id
router.route("/user-id/friend/friend-id").post(createNewFriend).delete(deleteFriend);

module.exports = router;