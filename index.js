const express = require('express');
const cors = require('cors');
const rotas = require('./routes/rotas');
const sequelize = require('./sequelize');

require('./associations');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors()); // para permitir conexoes fora da rede que eu estou

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

app.use(rotas);

// Verifica se este arquivo é o módulo principal executado
if (require.main === module) {
    app.listen(process.env.PORT || 3002, () => {
        console.log('Servidor da API rodando...')
    });
}

//para rodar dar npm run start:dev