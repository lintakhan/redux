import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.userId;

    const { firstName, lastName, email } = await User.findById(id);

    res.status(200).json({ firstName, lastName, email });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
