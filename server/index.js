const express = require("express");
const db = require("./db/models");

const app = express();

const port = process.env.PORT || 8080;




const run = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connected to the database successfully!");
     app.listen(port, () => {
      console.log(`The application is running on localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
