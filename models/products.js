'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
  });

  Products.associate = function(models){
    Products.belongsToMany(models.Categories, {through:'Cat-prod'});
    Products.belongsToMany(models.Cart, {through:'Cart-detail'});
    Products.belongsToMany(models.Users, {through:'User-prod'});
  }
  return Products;
};
