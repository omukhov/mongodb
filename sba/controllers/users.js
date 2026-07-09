import express from "express";
import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ createdAt: -1 });

    if (!users) {
      return res.status(404).json({ message: "Users not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
