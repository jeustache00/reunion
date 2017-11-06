'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    owner: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Products.associate = function(models){
    Products.belongsToMany(models.Categories, {through:'Cat-prod'});
  }
  return Products;
};
