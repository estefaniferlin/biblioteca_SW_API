const Autor = require('../entities/autor');

const getAutoresDB = async () => {
    try {
        const autores = await Autor.findAll({
            order: [['nome', 'ASC']]
        });
        return autores; 
    } catch(err) {
        throw new Error("Erro ao buscar autores: " + err.message);
    }
}

const addAutorDB = async (autorData) => {
    try {
        const autor = await Autor.create(autorData);
        return autor; 
    } catch (err) {
        throw new Error("Erro ao adicionar autor: " + err.message);
    }
};

const updateAutorDB = async (autorData) => {
    try {
        const { codigo, ...updateData } = autorData;
        const [updatedRows] = await Autor.update(updateData, {
            where: { codigo }
        });
        if (updatedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser alterado`);
        }
        return await Autor.findByPk(codigo);
    } catch (err) {
        throw new Error("Erro ao atualizar autor: " + err.message);
    }
};

const deleteAutorDB = async (codigo) => {
    try {
        const deletedRows = await Autor.destroy({
            where: { codigo }
        });
        if (deletedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser removido`);
        }
        return "Registro removido com sucesso";
    } catch (err) {
        throw new Error("Erro ao remover autor: " + err.message);
    }
};

const getAutorPorCodigoDB = async (codigo) => {
    try {
        const autor = await Autor.findByPk(codigo);
        if (!autor) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo}`);
        }
        return autor;
    } catch (err) {
        throw new Error("Erro ao recuperar autor: " + err.message);
    }
};

module.exports = { getAutoresDB, addAutorDB, updateAutorDB, deleteAutorDB, getAutorPorCodigoDB }