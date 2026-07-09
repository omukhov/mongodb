import express from "express";
import Users from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    res.status(200).json("your data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
