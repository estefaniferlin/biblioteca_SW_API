const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Localizacao = require('../../entities/localizacao');
const localizacaoUseCases = require('../../usecases/localizacaoUseCases');

describe('Localizacao Use Cases', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getLocalizacoesDB', () => {
        it('deve retornar uma lista de todas as localizações', async () => {
            const localizacoesMock = [
                { codigo: 1, estante: 1, prateleira: 1 },
                { codigo: 2, estante: 1, prateleira: 2 }
            ];
            sandbox.stub(Localizacao, 'findAll').resolves(localizacoesMock);

            const resultado = await localizacaoUseCases.getLocalizacoesDB();

            expect(resultado).to.be.an('array');
            expect(resultado).to.have.lengthOf(2);
            expect(resultado[0].estante).to.equal(1);
            expect(resultado[1].prateleira).to.equal(2);
        });
    });

    describe('addLocalizacaoDB', () => {
        it('deve adicionar uma nova localização e retorná-la', async () => {
            const localizacaoData = { estante: 2, prateleira: 3 };
            sandbox.stub(Localizacao, 'create').resolves(localizacaoData);

            const resultado = await localizacaoUseCases.addLocalizacaoDB(localizacaoData);

            expect(resultado).to.be.an('object');
            expect(resultado.estante).to.equal(2);
        });
    });

    describe('updateLocalizacaoDB', () => {
        it('deve atualizar uma localização existente', async () => {
            const localizacaoData = { codigo: 1, estante: 2, prateleira: 4 };
            sandbox.stub(Localizacao, 'update').resolves([1]);
            sandbox.stub(Localizacao, 'findByPk').resolves(localizacaoData);

            const resultado = await localizacaoUseCases.updateLocalizacaoDB(localizacaoData);

            expect(resultado).to.be.an('object');
            expect(resultado.prateleira).to.equal(4);
        });
    });

    describe('deleteLocalizacaoDB', () => {
        it('deve deletar uma localização e retornar uma mensagem de sucesso', async () => {
            sandbox.stub(Localizacao, 'destroy').resolves(1);

            const resultado = await localizacaoUseCases.deleteLocalizacaoDB(1);

            expect(resultado).to.equal("Registro removido com sucesso");
        });
    });

    describe('getLocalizacaoPorCodigoDB', () => {
        it('deve retornar uma localização pelo seu código', async () => {
            const localizacaoEsperada = { codigo: 1, estante: 1, prateleira: 1 };
            sandbox.stub(Localizacao, 'findByPk').resolves(localizacaoEsperada);

            const resultado = await localizacaoUseCases.getLocalizacaoPorCodigoDB(1);

            expect(resultado).to.be.an('object');
            expect(resultado.codigo).to.equal(1);
        });
    });
});
