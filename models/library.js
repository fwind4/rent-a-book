'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  Library.associate = function(models) {
    // associations can be defined here
  };
  return Library;
};