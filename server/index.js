const express = require("express");
const db = require("./db/models");
const cors = require("cors");

const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(restaurantRoutes);

// Not found and error general middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);




const run = async () => {
  try {
    await db.sequelize.sync();

    //The following line is used to drop the database's data when needed
    // await db.sequelize.sync({ force: true });

    console.log("Connected to the database successfully!");
    app.listen(port, () => {
      console.log(`The application is running on localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
