const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Localizacao extends Model {}

Localizacao.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prateleira: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'localizacao',
    tableName: 'localizacoes',
    timestamps: false
});

module.exports = Localizacao;