const Livro = require('../entities/livro');
const Categoria = require('../entities/categoria');
const Editora = require('../entities/editora');
const Localizacao = require('../entities/localizacao');
const Autor = require('../entities/autor');

const getLivrosDB = async () => {
    try{
        const livros = await Livro.findAll({
            attributes: ['codigo', 'titulo', 'isbn', 'edicao', 'anopublicacao', 'quantidade'],
            include: [
                { model: Categoria, as: 'Categoria', attributes: ['nome'] },
                { model: Editora, as: 'Editora', attributes: ['nome'] },
                { model: Localizacao, as: 'Localizacao', attributes: ['estante', 'prateleira'] },
                { model: Autor, as: 'Autor', attributes: ['nome'] }
            ],
            order: [['codigo', 'ASC']]
        });

        return livros.map(livro => ({
            codigo: livro.codigo,
            titulo: livro.titulo,
            isbn: livro.isbn,
            edicao: livro.edicao,
            anopublicacao: livro.anopublicacao,
            quantidade: livro.quantidade,
            Categoria: livro.Categoria.nome,
            Autor: livro.Autor.nome,
            Editora: livro.Editora.nome,
            Localizacao: {
                estante: livro.Localizacao.estante,
                prateleira: livro.Localizacao.prateleira
            }
        }));

    } catch (err) {
        throw new Error("Erro ao buscar livros: " + err.message);
    }   
};

const addLivroDB = async (livroData) => {
    try {
        const livro = await Livro.create(livroData);
        return livro; 
    } catch (err) {
        throw new Error("Erro ao adicionar livro: " + err.message);
    }
};

const updateLivroDB = async (livroData) => {
    try{
        const { codigo, ...updateData } = livroData;
        const [updatedRows] = await Livro.update(updateData, {
            where: { codigo }
        });
        if (updatedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser alterado`);
        }
        return await Livro.findByPk(codigo, {
            include: [
                { model: Categoria, as: 'Categoria', attributes: ['nome'] },
                { model: Editora, as: 'Editora', attributes: ['nome'] },
                { model: Localizacao, as: 'Localizacao', attributes: ['estante', 'prateleira'] },
                { model: Autor, as: 'Autor', attributes: ['nome'] }
            ],
        });
    } catch (err) {
        throw new Error("Erro ao atualizar livro: " + err.message);
    }
};

const deleteLivroDB = async (codigo) => {
    try{
        const deletedRows = await Livro.destroy({ where: { codigo } });
        if (deletedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser removido`);
        }
        return "Registro removido com sucesso";
    } catch (err) {
        throw new Error("Erro ao remover livro: " + err.message);
    }
};

const getLivroPorCodigoDB = async (codigo) => {
    try {
        const livro = await Livro.findByPk(codigo, {
            include: [
                { model: Categoria, as: 'Categoria', attributes: ['nome'] },
                { model: Editora, as: 'Editora', attributes: ['nome'] },
                { model: Localizacao, as: 'Localizacao', attributes: ['estante', 'prateleira'] },
                { model: Autor, as: 'Autor', attributes: ['nome'] }
            ],
        });
        if (!livro) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo}`);
        }
        return livro;
    } catch (err) {
        throw new Error("Erro ao recuperar livro: " + err.message);
    }
};

module.exports = { getLivrosDB, addLivroDB, updateLivroDB, deleteLivroDB, getLivroPorCodigoDB };
