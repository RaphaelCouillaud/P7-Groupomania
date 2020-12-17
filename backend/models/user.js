'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    jobtitle: DataTypes.STRING 
  });
  User.associate = function (models) {
    //Associations can be define here//
    User.hasMany(models.message,{
      foreignKey: 'userId',
      as: 'Messages', //Sequelize defaults to using the pluralized model name//
      //Un utilisateur peut envoyer plusieurs messages//
    }); 
  };
  
  
  return user;
};