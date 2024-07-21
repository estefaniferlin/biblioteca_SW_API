const Editora = require('../entities/editora');

const getEditorasDB = async () => {
    try {
        const editoras = await Editora.findAll({
            order: [['nome', 'ASC']]
        });
        return editoras; 
    } catch(err) {
        throw new Error("Erro ao buscar categorias: " + err.message);
    }
}

const addEditoraDB = async (editoraData) => {
    try {
        const editora = await Editora.create(editoraData);
        return editora; 
    } catch (err) {
        throw new Error("Erro ao adicionar editora: " + err.message);
    }
};

const updateEditoraDB = async (editoraData) => {
    try {
        const { codigo, ...updateData } = editoraData;
        const [updatedRows] = await Editora.update(updateData, {
            where: { codigo }
        });
        if (updatedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser alterado`);
        }
        return await Editora.findByPk(codigo);
    } catch (err) {
        throw new Error("Erro ao atualizar editora: " + err.message);
    }
};

const deleteEditoraDB = async (codigo) => {
    try {
        const deletedRows = await Editora.destroy({
            where: { codigo }
        });
        if (deletedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser removido`);
        }
        return "Registro removido com sucesso";
    } catch (err) {
        throw new Error("Erro ao remover editora: " + err.message);
    }
};

const getEditoraPorCodigoDB = async (codigo) => {
    try {
        const editora = await Editora.findByPk(codigo);
        if (!editora) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo}`);
        }
        return editora;
    } catch (err) {
        throw new Error("Erro ao recuperar editora: " + err.message);
    }
};

module.exports = { getEditorasDB, addEditoraDB, updateEditoraDB, deleteEditoraDB, getEditoraPorCodigoDB }