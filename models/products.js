'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
  });

  Products.associate = function(models){
    Products.belongsToMany(models.Categories, {through:'CatProds'});
    Products.belongsToMany(models.Carts, {through:'CartDetails'});
  }
  return Products;
};
