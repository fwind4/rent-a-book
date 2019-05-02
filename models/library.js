'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  Library.associate = function(models) {
    Library.belongsTo(models.Book, { foreignKey: 'bookId' });
  };
  return Library;
};