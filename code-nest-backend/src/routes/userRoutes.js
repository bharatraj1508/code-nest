const express = require("express");

const router = express.Router();

const {
  viewUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/userController");

const passport = require("passport");
router.use(passport.initialize());
require("../middlewares/passport");
const authenticate = passport.authenticate("jwt", { session: false });

router.use(authenticate);

router.get("/", viewUserProfile);
router.put("/", updateUserProfile);
router.delete("/", deleteUserProfile);

module.exports = router;