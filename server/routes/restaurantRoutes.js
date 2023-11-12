const express = require("express");
const controller = require("../controllers/restaurantsController");
const router = express.Router();

//Register a new restaurant
router.post("/restaurants", controller.addRestaurant);

module.exports = router;
