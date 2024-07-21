const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Categoria extends Model {}

Categoria.init({
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
    modelName: 'Categoria',
    tableName: 'categorias',
    timestamps: false
});

module.exports = Categoria;