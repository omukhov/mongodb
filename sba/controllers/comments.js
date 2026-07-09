import express from "express";
import Comment from "../models/comment.js";

export const getAllComments = async (req, res) => {
  try {
    res.status(200).json("your data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
