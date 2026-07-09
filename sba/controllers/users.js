import express from "express";
import User from "../models/user.js";

export const getTenUsers = async (req, res) => {
  try {
    const users = await User.find().limit(10);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
