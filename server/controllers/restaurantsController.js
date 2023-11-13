const { Restaurant } = require("../db/models");

exports.addRestaurant = async (req, res, next) => {
  try {
    // Check if the phone number is already existing
    const existingRestaurant = await Restaurant.findOne({
      where: { phone_number: req.body.phone_number },
    });

    if (existingRestaurant) {
      return res.status(400).json({
        error: "Phone number already exists",
      });
    }

    // Register a new restaurant
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    // Handle Sequelize validation errors
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).json({
        error: "Validation error",
        details: errors,
      });
    }
    next(error);
  }
};
