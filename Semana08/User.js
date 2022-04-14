const { sequelize } = require('./connection');
const { Model, DataTypes } = require('sequelize');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });


module.exports = { User };
