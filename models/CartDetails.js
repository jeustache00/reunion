'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartDetails = sequelize.define('CartDetails', {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });
  return CartDetails;
};
