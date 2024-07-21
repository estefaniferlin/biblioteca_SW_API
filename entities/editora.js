const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Editora extends Model {}

Editora.init({
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
    modelName: 'Editora',
    tableName: 'editoras',
    timestamps: false
});

module.exports = Editora;