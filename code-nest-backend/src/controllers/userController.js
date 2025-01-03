const mongoose = require("mongoose");
const User = mongoose.model("User");

const viewUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const updateUserProfile = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, email, updated_at: Date.now() },
      {
        new: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send({
      message: "user updated successfully",
      user,
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id).select("email");

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send({
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports = {
  viewUserProfile,
  updateUserProfile,
  deleteUserProfile,
};