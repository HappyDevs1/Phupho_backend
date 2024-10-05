const express = require("express");
import userModel from "../models/userModel";

export const RegisterUser = async (req, res) => {
  const { name, email, password} = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(406).json({ message: "Fields cannot be empty" });

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(404).json({ message: "User already exists" });
      };

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save();

      res.status(201).json({ message: "User registered sucessfully", user: newUser });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error, failed to create a user" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(404).json({ message: "Fields cannot be empty" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: `Login sucessful, logged in as ${user}`})
  } catch (error) {
    res.status(500).json({ message: "Server error, failed to login user" });
  }
};