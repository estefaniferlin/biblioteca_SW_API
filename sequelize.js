const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
    isProduction ? process.env.DATABASE_URL : 'bibliotecasw', 
    isProduction ? null : 'postgres', 
    isProduction ? null : 'accesskey@Me7', 
    {
        dialect: 'postgres',
        host: isProduction ? null : 'localhost', 
        protocol: 'postgres',
        port: isProduction ? null : 5432, 
        dialectOptions: isProduction ? {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        } : {}
    }
);

module.exports = sequelize;