const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      notEmpty: true,
      defaultValue: false
    },
    password_hashed: DataTypes.STRING,// This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
    password: DataTypes.VIRTUAL, // Note that this is a virtual, and not actually stored in DB
  }, {
    indexes: [{fields: ['email'], unique: true}],
    hooks: {
      beforeCreate: setEmailAndPassword,
      beforeUpdate: setEmailAndPassword,
    },
    defaultScope: {
      attributes: {exclude: ['password_digest']}
    }
  });


  // This method is a Promisified bcrypt.compare
  Users.prototype.authenticate = function(userInputPass) {
    return bcrypt.compare(userInputPass, this.password_hashed)
  }

  Users.associate = function(models){
    Users.hasMany(models.Products);
  }

  return Users;
}

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => {
      user.set('password_hashed', hash)
    })
}
