'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Answers = sequelize.define('answers', {
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    messagesId: DataTypes.INTEGER
  });
  
  Answers.associate = function (models) {
    Answers.belongsTo(models.messages, {
      foreignKey: 'messagesId',
    });
  }
  return answers;
};
