const { getAutoresDB, addAutorDB, updateAutorDB,
    deleteAutorDB, getAutorPorCodigoDB } 
    = require('../usecases/autorUseCases');

const getAutores = async (request, response) => {
try {
    const data = await getAutoresDB();
    response.status(200).json(data);
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: 'Erro ao consultar as Autores: ' + err.message
    });
}
};

const addAutor = async (request, response) => {
try {
    const data = await addAutorDB(request.body);
    response.status(200).json({
        status: 'success',
        message: 'Autor Criado',
        objeto: data
    });
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: err.message
    });
}
};

const updateAutor = async (request, response) => {
try {
    const data = await updateAutorDB(request.body);
    response.status(200).json({
        status: 'success',
        message: 'Autor alterado',
        objeto: data
    });
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: err.message
    });
}
};

const deleteAutor = async (request, response) => {
try {
    const message = await deleteAutorDB(request.params.codigo);
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

const getAutorPorCodigo = async (request, response) => {
try {
    const data = await getAutorPorCodigoDB(request.params.codigo);
    response.status(200).json(data);
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: err.message
    });
}
};
module.exports = { getAutores, addAutor, updateAutor, deleteAutor, getAutorPorCodigo };