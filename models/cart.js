'use strict';
module.exports = (sequelize, DataTypes) => {
  var Carts = sequelize.define('Carts', {

  });
  Carts.associate = function(models){
    Carts.belongsToMany(models.Products, {through:'CartDetails'});
    Carts.belongsTo(models.Users);
  }
  return Carts;
};
