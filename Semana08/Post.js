const { sequelize } = require('./connection');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}
Post.init({
  title: DataTypes.STRING,
  text: DataTypes.STRING
}, { sequelize, modelName: 'post' });


module.exports = { Post };
