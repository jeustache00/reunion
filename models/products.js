'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    url: DataTypes.STRING,
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    }
  });

  Products.associate = function(models){
    Products.belongsToMany(models.Categories, {through:'CatProds'}, {onDelete:'cascade'});
    Products.belongsToMany(models.Carts, {through:'CartDetails'}, {onDelete:'cascade'});
  }
  return Products;
};

