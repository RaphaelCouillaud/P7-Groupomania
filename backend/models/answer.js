'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('answers', {
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    messageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });
  
  Answer.associate = function (models) {
    //Associations can be define here//
    Answer.belongsTo(models.user, {
      foreignKey: 'userId',
     
    });
    Answer.belongsTo(models.message, {
      foreignKey: 'messageId',
      onDelete: 'CASCADE', // Si on supprime un message, on supprime ses réponses //
    });
  }
  return answer;
};
