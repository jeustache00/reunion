'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    type: DataTypes.STRING
  });
  Categories.associate = function(models){
    Categories.belongsToMany(models.Products, {through:'CatProds'});
  }
  return Categories;
};
