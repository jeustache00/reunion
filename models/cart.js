'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Cart.associate = function(models){
    Cart.belongsTo(models.Users, {through:'Cart-detail'});
  }
  return Cart;
};
