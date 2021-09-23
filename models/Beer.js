const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Beer extends Model { }

Beer.init({
	name: DataTypes.STRING,
	type: DataTypes.STRING,
	abv: DataTypes.FLOAT,
	brewery: DataTypes.STRING
}, { sequelize, modelName: 'beer' })

module.exports = Beer
