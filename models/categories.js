'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Categories.associate = function(models){
    Categories.belongsToMany(models.Products, {through:'Cat-prod'});
  }
  return Categories;
};
