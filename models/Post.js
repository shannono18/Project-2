const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
	title: DataTypes.STRING,
	comment: DataTypes.STRING,
	rating: DataTypes.FLOAT,
	fav: DataTypes.BOOLEAN,
	img_url: DataTypes.STRING
}, { sequelize, modelName: 'post' })

module.exports = Post
