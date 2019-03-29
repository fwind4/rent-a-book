'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
    }
    
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};