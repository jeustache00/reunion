'use strict';
module.exports = (sequelize, DataTypes) => {
  var Options = sequelize.define('Options', {
    option: {
      //Option to TRY RENT BUY
      //1=TRY 2=RENT 3=BUY
      type: DataTypes.STRING,
    },
  });

  Options.associate = function(models){
    Options.hasMany(models.CartDetails)
  }
  return Options;
};
