'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cart = sequelize.define('Cart', {
    userid: DataTypes.INTEGER
  });
  Cart.associate = function(models){
    Cart.belongsToMany(models.Products, {through:'User-prod'});
  }
  return Cart;
};
