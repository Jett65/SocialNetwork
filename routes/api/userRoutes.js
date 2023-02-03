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

// TODO: Make this rout work
// //api/users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// TODO: Make that rout work
// //api/users/user-id/friends/friend-id
router.route("/user-id/friend/friend-id").post(createNewFriend).delete(deleteFriend);

module.exports = router;