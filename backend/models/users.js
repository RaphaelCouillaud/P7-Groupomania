'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    jobtitle: DataTypes.STRING 
  });
  Users.associate = function (models) {
    Users.hasMany(models.messages);
  };
  
  
  return users;
};