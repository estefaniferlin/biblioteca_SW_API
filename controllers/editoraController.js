const { getEditorasDB, addEditoraDB, updateEditoraDB,
    deleteEditoraDB, getEditoraPorCodigoDB } 
    = require('../usecases/editoraUseCases');

const getEditoras = async (request, response) => {
try {
    const data = await getEditorasDB();
    response.status(200).json(data);
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: 'Erro ao consultar as Editoras: ' + err.message
    });
}
};

const addEditora = async (request, response) => {
try {
    const data = await addEditoraDB(request.body);
    response.status(200).json({
        status: 'success',
        message: 'Editora Criada',
        objeto: data
    });
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: err.message
    });
}
};

const updateEditora = async (request, response) => {
try {
    const data = await updateEditoraDB(request.body);
    response.status(200).json({
        status: 'success',
        message: 'Editora alterada',
        objeto: data
    });
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: err.message
    });
}
};

const deleteEditora = async (request, response) => {
try {
    const message = await deleteEditoraDB(request.params.codigo);
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

const getEditoraPorCodigo = async (request, response) => {
try {
    const data = await getEditoraPorCodigoDB(request.params.codigo);
    response.status(200).json(data);
} catch (err) {
    response.status(400).json({
        status: 'error',
        message: err.message
    });
}
};
module.exports = { getEditoras, addEditora, updateEditora, deleteEditora, getEditoraPorCodigo };