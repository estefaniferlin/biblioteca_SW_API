const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Categoria = require('../../entities/categoria');
const categoriaUseCases = require('../../usecases/categoriaUseCases');

describe('Categoria Use Cases', () => {
    let sandbox;

    beforeEach(() => { // a cada it (teste) está sendo criado um novo ambiente (sandbox)
        sandbox = sinon.createSandbox();
    });

    afterEach(() => { // a cada teste está excluindo o ambiente (sandbox)
        sandbox.restore();
    });

    describe('getCategoriasDB', () => {
        it('deve retornar uma lista de todas as categorias', async () => {
            const categoriasMock = [
                { codigo: 1, nome: 'Ficção Científica' },
                { codigo: 2, nome: 'História' }
            ];
            sandbox.stub(Categoria, 'findAll').resolves(categoriasMock);

            const resultado = await categoriaUseCases.getCategoriasDB();

            expect(resultado).to.be.an('array');
            expect(resultado).to.have.lengthOf(2);
            expect(resultado[0].nome).to.equal('Ficção Científica');
            expect(resultado[1].nome).to.equal('História');
        });
    });

    describe('addCategoriaDB', () => {
        it('deve adicionar uma nova categoria e retorná-la', async () => {
            const categoriaData = { nome: 'Biografias' };
            sandbox.stub(Categoria, 'create').resolves(categoriaData);

            const resultado = await categoriaUseCases.addCategoriaDB(categoriaData);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Biografias');
        });
    });

    describe('updateCategoriaDB', () => {
        it('deve atualizar uma categoria existente', async () => {
            const categoriaData = { codigo: 1, nome: 'Biografias Atualizado' };
            sandbox.stub(Categoria, 'update').resolves([1]);  // Indicando que uma linha foi atualizada
            sandbox.stub(Categoria, 'findByPk').resolves(categoriaData);

            const resultado = await categoriaUseCases.updateCategoriaDB(categoriaData);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Biografias Atualizado');
        });
    });

    describe('deleteCategoriaDB', () => {
        it('deve deletar uma categoria e retornar uma mensagem de sucesso', async () => {
            sandbox.stub(Categoria, 'destroy').resolves(1);  // 1 indica sucesso na exclusão

            const resultado = await categoriaUseCases.deleteCategoriaDB(1);

            expect(resultado).to.equal("Registro removido com sucesso");
        });
    });

    describe('getCategoriaPorCodigoDB', () => {
        it('deve retornar uma categoria pelo seu código', async () => {
            const categoriaEsperada = { codigo: 1, nome: 'Ficção Científica' };
            sandbox.stub(Categoria, 'findByPk').resolves(categoriaEsperada);

            const resultado = await categoriaUseCases.getCategoriaPorCodigoDB(1);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Ficção Científica');
        });
    });
});
