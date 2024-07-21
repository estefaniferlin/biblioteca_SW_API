const { getLivrosDB, addLivroDB, updateLivroDB,
        deleteLivroDB, getLivroPorCodigoDB } 
        = require('../usecases/livroUseCases');

const getLivros = async (request, response) => {
    try {
        const data = await getLivrosDB();
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os Livros: ' + err.message
        });
    }
};

const addLivro = async (request, response) => {
    try {
        const data = await addLivroDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Livro Criado',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const updateLivro = async (request, response) => {
    try {
        const data = await updateLivroDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Livro alterado',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const deleteLivro = async (request, response) => {
    try {
        const message = await deleteLivroDB(request.params.codigo);
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

const getLivroPorCodigo = async (request, response) => {
    try {
        const data = await getLivroPorCodigoDB(request.params.codigo);
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};
module.exports = { getLivros, addLivro, updateLivro, deleteLivro, getLivroPorCodigo };