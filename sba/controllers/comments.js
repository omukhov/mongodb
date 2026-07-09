import express from "express";
import Comment from "../models/comment.js";

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({ createdAt: -1 });

    if (!comments) {
      return res.status(404).json({ message: "Comments not found" });
    }

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
