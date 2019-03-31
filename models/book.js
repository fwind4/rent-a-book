'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  Book.associate = function (models) {
    Book.belongsToMany(models.User, { through: 'Library' });
  };
  return Book;
};