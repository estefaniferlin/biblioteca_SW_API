const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Livro = require('../../entities/livro');
const livroUseCases = require('../../usecases/livroUseCases');

describe('Livro Use Cases', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getLivrosDB', () => {
        it('deve retornar uma lista de todos os livros', async () => {
            const livrosMock = [
                {
                    codigo: 1, titulo: '1984', isbn: '9780451524935', edicao: '1ª Edição',
                    anopublicacao: 1949, quantidade: 3,
                    Categoria: { nome: 'Ficção' }, Editora: { nome: 'Editora Nacional' },
                    Localizacao: { estante: 5, prateleira: 1 }, Autor: { nome: 'George Orwell' }
                },
            ];
            sandbox.stub(Livro, 'findAll').resolves(livrosMock);

            const resultado = await livroUseCases.getLivrosDB();

            expect(resultado).to.be.an('array');
            expect(resultado).to.have.lengthOf(1);
            expect(resultado[0].titulo).to.equal('1984');
        });
    });

    describe('addLivroDB', () => {
        it('deve adicionar um novo livro e retorná-lo', async () => {
            const livroData = {
                titulo: 'Brave New World', isbn: '9780060850524', edicao: '1ª Edição',
                anopublicacao: 1932, quantidade: 5, categoria: 1, editora: 1, localizacao: 1, autor: 1
            };
            sandbox.stub(Livro, 'create').resolves(livroData);

            const resultado = await livroUseCases.addLivroDB(livroData);

            expect(resultado).to.be.an('object');
            expect(resultado.titulo).to.equal('Brave New World');
        });
    });

    describe('updateLivroDB', () => {
        it('deve atualizar um livro existente e retornar os dados atualizados', async () => {
            const updateData = { codigo: 1, titulo: 'Novo Título' };
            sandbox.stub(Livro, 'update').resolves([1]);
            sandbox.stub(Livro, 'findByPk').resolves({...updateData, isbn: '9780451524935'});

            const resultado = await livroUseCases.updateLivroDB(updateData);

            expect(resultado).to.be.an('object');
            expect(resultado.titulo).to.equal('Novo Título');
        });
    });

    describe('deleteLivroDB', () => {
        it('deve deletar um livro e retornar uma mensagem de sucesso', async () => {
            sandbox.stub(Livro, 'destroy').resolves(1);

            const resultado = await livroUseCases.deleteLivroDB(1);

            expect(resultado).to.equal("Registro removido com sucesso");
        });
    });

    describe('getLivroPorCodigoDB', () => {
        it('deve retornar um livro pelo seu código', async () => {
            const livroEsperado = {
                codigo: 1, titulo: '1984', isbn: '9780451524935', edicao: '1ª Edição',
                anopublicacao: 1949, quantidade: 3
            };
            sandbox.stub(Livro, 'findByPk').resolves(livroEsperado);

            const resultado = await livroUseCases.getLivroPorCodigoDB(1);

            expect(resultado).to.be.an('object');
            expect(resultado.titulo).to.equal('1984');
        });
    });
});
