const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Beer extends Model { }

Beer.init({
	name: DataTypes.STRING,
	abv: DataTypes.FLOAT
}, { sequelize, modelName: 'beer' })

module.exports = Beer
