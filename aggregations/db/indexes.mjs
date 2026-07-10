import db from "./conn.mjs";

const createIndexes = async () => {
  try {
    await db.collection("grades").createIndex({
      class_id: 1,
    });
    await db.collection("grades").createIndex({
      learner_id: 1,
    });
    await db.collection("grades").createIndex({
      class_id: 1,
      learner_id: 1,
    });
  } catch (e) {
    console.error(e);
  }
};

createIndexes();
