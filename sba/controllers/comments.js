import express from "express";
import Comment from "../models/comment.js";

// Function for getting first 10 comments
export const getTenComments = async (req, res) => {
  try {
    const comments = await Comment.find().limit(10);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
