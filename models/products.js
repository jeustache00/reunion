'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
  });

  Products.associate = function(models){
    Products.belongsToMany(models.Categories, {through:'Cat-prod'});
    Products.belongsToMany(models.Carts, {through:'Cart-details'});
  }
  return Products;
};
