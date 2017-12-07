'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartDetails = sequelize.define('CartDetails', {
    quantity: {
      type: DataTypes.INTEGER
    },
    //Option indicates wether product has been added to cart with the intent
    //to try  -> 1
    //to rent -> 2
    //to buy  -> 3
  });
  return CartDetails;
};
