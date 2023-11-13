module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define("Restaurant", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    // Basic Information Form
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    street_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opening_hours_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    opening_hours_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    landmarks: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    // Menu Form
    menu_items_serving_times: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },

    // Maintenance History Form
    maintenance_date_start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    maintenance_date_end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    maintenance_impact: {
      type: DataTypes.ENUM(
        "Complete_shutdown",
        "Partial_shutdown",
        "Normal_operations"
      ),
      allowNull: false,
    },
    maintenance_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    maintenance_comments: {
      type: DataTypes.TEXT,
    },
  });
  return Restaurant;
};
