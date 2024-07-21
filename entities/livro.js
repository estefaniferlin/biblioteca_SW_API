const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Livro extends Model {}

Livro.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edicao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anopublicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    autor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    editora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    localizacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'livro',
    tableName: 'livros',
    timestamps: false
});

module.exports = Livro;