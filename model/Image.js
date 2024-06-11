const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Image extends Model {}

Image.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		hooks: {},
		sequelize,
		underscored: true,
		modelName: 'image',
	},
);

module.exports = Image;
