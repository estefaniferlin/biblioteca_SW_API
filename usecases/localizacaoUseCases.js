const Localizacao = require('../entities/localizacao');

const getLocalizacoesDB = async () => {
    try {
        const localizacoes = await Localizacao.findAll({
            order: [['estante', 'ASC']]
        });
        return localizacoes; 
    } catch(err) {
        throw new Error("Erro ao buscar categorias: " + err.message);
    }
}

const addLocalizacaoDB = async (localizacaoData) => {
    try {
        const localizacao = await Localizacao.create(localizacaoData);
        return localizacao;
    } catch (err) {
        throw new Error("Erro ao adicionar localização: " + err.message);
    }
};

const updateLocalizacaoDB = async (localizacaoData) => {
    try {
        const { codigo, ...updateData } = localizacaoData;
        const [updatedRows] = await Localizacao.update(updateData, {
            where: { codigo }
        });
        if (updatedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser alterado`);
        }
        return await Localizacao.findByPk(codigo);
    } catch (err) {
        throw new Error("Erro ao atualizar localização: " + err.message);
    }
};

const deleteLocalizacaoDB = async (codigo) => {
    try {
        const deletedRows = await Localizacao.destroy({
            where: { codigo }
        });
        if (deletedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser removido`);
        }
        return "Registro removido com sucesso";
    } catch (err) {
        throw new Error("Erro ao remover localização: " + err.message);
    }
};

const getLocalizacaoPorCodigoDB = async (codigo) => {
    try {
        const localizacao = await Localizacao.findByPk(codigo);
        if (!localizacao) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo}`);
        }
        return localizacao;
    } catch (err) {
        throw new Error("Erro ao recuperar localizacao: " + err.message);
    }
};

module.exports = { getLocalizacoesDB, addLocalizacaoDB, updateLocalizacaoDB, deleteLocalizacaoDB, getLocalizacaoPorCodigoDB }