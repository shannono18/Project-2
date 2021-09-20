const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
	title: DataTypes.STRING,
	comment: DataTypes.STRING,
	rating: DataTypes.FLOAT,
	dnd: DataTypes.BOOLEAN,
	fav: DataTypes.BOOLEAN
}, { sequelize, modelName: 'post' })

module.exports = Post
