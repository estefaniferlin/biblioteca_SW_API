const { getLocalizacoesDB, addLocalizacaoDB, updateLocalizacaoDB,
        deleteLocalizacaoDB, getLocalizacaoPorCodigoDB } 
        = require('../usecases/localizacaoUseCases');

const getLocalizacoes = async (request, response) => {
    try {
        const data = await getLocalizacoesDB();
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar as Localizacoes: ' + err.message
        });
    }
};

const addLocalizacao = async (request, response) => {
    try {
        const data = await addLocalizacaoDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Localizacao Criada',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const updateLocalizacao = async (request, response) => {
    try {
        const data = await updateLocalizacaoDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Localizacao alterada',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const deleteLocalizacao = async (request, response) => {
    try {
        const message = await deleteLocalizacaoDB(request.params.codigo);
        response.status(200).json({
            status: 'success',
            message
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const getLocalizacaoPorCodigo = async (request, response) => {
    try {
        const data = await getLocalizacaoPorCodigoDB(request.params.codigo);
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};
module.exports = { getLocalizacoes, addLocalizacao, updateLocalizacao, deleteLocalizacao, getLocalizacaoPorCodigo };