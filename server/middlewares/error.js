function errorMiddleware(error, req, res, next) {
  res
    .status(error.status || 500)
    .json(error.message || "Internal server error");
  next();
}
module.exports = errorMiddleware;
