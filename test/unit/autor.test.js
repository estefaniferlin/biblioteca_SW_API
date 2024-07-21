const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const autor = require('../../entities/autor');
const autorUseCases = require('../../usecases/autorUseCases');

describe('Autor Use Cases', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAutoresDB', () => {
        it('deve retornar uma lista de todas os autores', async () => {
            const autorsMock = [
                { codigo: 1, nome: 'George Orwell' },
                { codigo: 2, nome: 'Raphael Montes' }
            ];
            sandbox.stub(autor, 'findAll').resolves(autorsMock);

            const resultado = await autorUseCases.getAutoresDB();

            expect(resultado).to.be.an('array'); // testa se oq retorna é array
            expect(resultado).to.have.lengthOf(2); // testa se tem 2 objetos (obj ficção e história)
            expect(resultado[0].nome).to.equal('George Orwell'); // espera que o nome do 1o seja FC
            expect(resultado[1].nome).to.equal('Raphael Montes'); // espera que o nome do 2o seja hist
        });
    });

    describe('addAutorDB', () => {
        it('deve adicionar um novo autor e retorná-la', async () => {
            const autorData = { nome: 'Stephen King' };
            sandbox.stub(autor, 'create').resolves(autorData);

            const resultado = await autorUseCases.addAutorDB(autorData);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Stephen King');
        });
    });

    describe('updateAutorDB', () => {
        it('deve atualizar uma autor existente', async () => {
            const autorData = { codigo: 1, nome: 'Stephen King Atualizado' };
            sandbox.stub(autor, 'update').resolves([1]);  // Indicando que uma linha foi atualizada
            sandbox.stub(autor, 'findByPk').resolves(autorData);

            const resultado = await autorUseCases.updateAutorDB(autorData);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Stephen King Atualizado');
        });
    });

    describe('deleteAutorDB', () => {
        it('deve deletar uma autor e retornar uma mensagem de sucesso', async () => {
            sandbox.stub(autor, 'destroy').resolves(1);  // 1 indica sucesso na exclusão

            const resultado = await autorUseCases.deleteAutorDB(1);

            expect(resultado).to.equal("Registro removido com sucesso");
        });
    });

    describe('getAutorPorCodigoDB', () => {
        it('deve retornar uma autor pelo seu código', async () => {
            const autorEsperada = { codigo: 1, nome: 'George Orwell' };
            sandbox.stub(autor, 'findByPk').resolves(autorEsperada);

            const resultado = await autorUseCases.getAutorPorCodigoDB(1);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('George Orwell');
        });
    });
});

// rodar com npm test