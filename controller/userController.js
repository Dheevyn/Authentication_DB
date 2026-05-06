const userModel = require("../model/userModel");
const User = require("../model/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const getAll = await userModel.find();
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: getAll });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const getOne = await userModel.findById(req.params.id);
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: getOne });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

exports.newUser = async (req, res) => {
  try {
    const { username, password, phoneNumber, email } = req.body;
    const user = await userModel.create({
      username,
      password,
      phoneNumber,
      email,
    });
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};
