import express from "express";
import Comment from "../models/comment.js";

export const getTenComments = async (req, res) => {
  try {
    const comments = await Comment.find().limit(10);

    if (!comments) {
      return res.status(404).json({ message: "Comments not found" });
    }

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
