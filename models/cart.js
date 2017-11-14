'use strict';
module.exports = (sequelize, DataTypes) => {
  var Carts = sequelize.define('Carts', {

  });
  Carts.associate = function(models){
    Carts.belongsToMany(models.Products, {through:'Cart-details'});
    Carts.belongsTo(models.Users);
  }
  return Carts;
};
