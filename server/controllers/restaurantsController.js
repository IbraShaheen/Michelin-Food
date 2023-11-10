const { Restaurant } = require("../db/models");

exports.addRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    next(error);
  }
};
