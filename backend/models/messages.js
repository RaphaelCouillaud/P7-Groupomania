'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Messages = sequelize.define('messages', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER
  });

Messages.associate = function (models) {
  Messages.belongsTo(models.users, {
    foreignKey: 'usersId',
    onDelete: 'CASCADE', // Si on supprime un user, on supprime ses messages //
  });
}
  return messages;
};
