'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartDetails = sequelize.define('Cart-details', {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });
  return CartDetails;
};
