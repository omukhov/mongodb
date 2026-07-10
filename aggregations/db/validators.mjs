import db from "./conn.mjs";

const createValidators = async () => {
  try {
    await db.command({
      collMod: "grades",

      validator: {
        $jsonSchema: {
          bsonType: "object",

          required: ["learner_id", "class_id"],

          properties: {
            learner_id: {
              bsonType: "int",
              minimum 0,
            },

            class_id: {
              bsonType: "int",
              minimum: 0,
              maximum: 300,
            },
          },
        },
      },

      validationLevel: "strict",
      validationAction: "warn",
    });
  } catch (error) {
    console.log(error);
  }
};

createValidators();
