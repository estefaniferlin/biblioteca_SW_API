const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Autor extends Model {}

Autor.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autores',
    timestamps: false
});

module.exports = Autor;