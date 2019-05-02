'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    path: DataTypes.STRING
  }, {});
  Book.associate = function (models) {
    Book.belongsToMany(models.User, { through: 'Library', foreignKey: 'bookId' });
  };
  return Book;
};