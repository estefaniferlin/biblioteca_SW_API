const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const editora = require('../../entities/editora');
const editoraUseCases = require('../../usecases/editoraUseCases');

describe('Editora Use Cases', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getEditorasDB', () => {
        it('deve retornar uma lista de todas as editoras', async () => {
            const editorasMock = [
                { codigo: 1, nome: 'Companhia das Letras' },
                { codigo: 2, nome: 'Record' }
            ];
            sandbox.stub(editora, 'findAll').resolves(editorasMock);

            const resultado = await editoraUseCases.getEditorasDB();

            expect(resultado).to.be.an('array');
            expect(resultado).to.have.lengthOf(2);
            expect(resultado[0].nome).to.equal('Companhia das Letras');
            expect(resultado[1].nome).to.equal('Record');
        });
    });

    describe('addEditoraDB', () => {
        it('deve adicionar uma nova editora e retorná-la', async () => {
            const editoraData = { nome: 'Intrínseca' };
            sandbox.stub(editora, 'create').resolves(editoraData);

            const resultado = await editoraUseCases.addEditoraDB(editoraData);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Intrínseca');
        });
    });

    describe('updateEditoraDB', () => {
        it('deve atualizar uma editora existente', async () => {
            const editoraData = { codigo: 1, nome: 'Intrínseca Atualizado' };
            sandbox.stub(editora, 'update').resolves([1]);  // Indicando que uma linha foi atualizada
            sandbox.stub(editora, 'findByPk').resolves(editoraData);

            const resultado = await editoraUseCases.updateEditoraDB(editoraData);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Intrínseca Atualizado');
        });
    });

    describe('deleteEditoraDB', () => {
        it('deve deletar uma editora e retornar uma mensagem de sucesso', async () => {
            sandbox.stub(editora, 'destroy').resolves(1);  // 1 indica sucesso na exclusão

            const resultado = await editoraUseCases.deleteEditoraDB(1);

            expect(resultado).to.equal("Registro removido com sucesso");
        });
    });

    describe('getEditoraPorCodigoDB', () => {
        it('deve retornar uma editora pelo seu código', async () => {
            const editoraEsperada = { codigo: 1, nome: 'Companhia das Letras' };
            sandbox.stub(editora, 'findByPk').resolves(editoraEsperada);

            const resultado = await editoraUseCases.getEditoraPorCodigoDB(1);

            expect(resultado).to.be.an('object');
            expect(resultado.nome).to.equal('Companhia das Letras');
        });
    });
});
