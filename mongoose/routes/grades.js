import express from "express";
import Grade from "../models/grade.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const body = { ...req.body };

    if (body.student_id) {
      body.learner_id = body.student_id;
      delete body.student_id;
    }

    const grade = new Grade(body);
    await grade.save();

    res.status(201).send(grade);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Get a single grade entry
router.get("/:id", async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    console.log(grade);

    if (!grade) res.status(404).send("Not found");
    else res.status(200).send(grade);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Add a score to a grade entry
router.patch("/:id/add", async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(
      req.params.id,
      { $push: { scores: req.body } },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!grade) {
      return res.status(404).send({ error: "Grade not found" });
    }

    res.status(200).send(grade);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Remove a score from a grade entry
router.patch("/:id/remove", async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(
      req.params.id,
      { $pull: { scores: req.body } },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!grade) {
      return res.status(404).send({ error: "Grade not found" });
    }

    res.status(200).send(grade);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Delete a single grade entry
router.delete("/:id", async (req, res) => {
  try {
    const grade = await Grade.findByIdAndDelete(req.params.id);

    if (!grade) res.status(404).send("Not found");
    else res.status(200).send(grade);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Get route for backwards compatibility
router.get("/student/:id", async (req, res) => {
  res.redirect(`/grades/learner/${req.params.id}`);
});

// Get a learner's grade data
router.get("/learner/:id", async (req, res) => {
  try {
    let query = { learner_id: Number(req.params.id) };

    // Check for class_id parameter
    if (req.query.class) query.class_id = Number(req.query.class);

    let result = await Grade.find(query);

    if (!result) res.status(404).send("Not found");
    else res.status(200).send(result);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Delete a learner's grade data
router.delete("/learner/:id", async (req, res) => {
  try {
    let query = { learner_id: Number(req.params.id) };

    let result = await Grade.deleteOne(query);

    if (!result) res.status(404).send("Not found");
    else res.status(200).send(result);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Get a class's grade data
router.get("/class/:id", async (req, res) => {
  try {
    let query = { class_id: Number(req.params.id) };

    // Check for learner_id parameter
    if (req.query.learner) query.learner_id = Number(req.query.learner);

    let result = await Grade.find(query);

    if (!result) res.status(404).send("Not found");
    else res.status(200).send(result);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Update a class id
router.patch("/class/:id", async (req, res) => {
  try {
    let query = { class_id: Number(req.params.id) };

    let result = await Grade.updateMany(query, {
      $set: { class_id: req.body.class_id },
    });

    if (!result) res.status(404).send("Not found");
    else res.status(200).send(result);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

// Delete a class
router.delete("/class/:id", async (req, res) => {
  try {
    let query = { class_id: Number(req.params.id) };

    let result = await Grade.deleteMany(query);

    if (!result) res.status(404).send("Not found");
    else res.status(200).send(result);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res.status(400).send({ error: err.message });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
});

export default router;
