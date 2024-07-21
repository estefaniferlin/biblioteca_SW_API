const Categoria = require('./entities/categoria');
const Livro = require('./entities/livro');
const Autor = require('./entities/autor');
const Editora = require('./entities/editora');
const Localizacao = require('./entities/localizacao');

Livro.belongsTo(Categoria, { foreignKey: 'categoria', as: 'Categoria' });
Livro.belongsTo(Autor, { foreignKey: 'autor', as: 'Autor' });
Livro.belongsTo(Editora, { foreignKey: 'editora', as: 'Editora' });
Livro.belongsTo(Localizacao, { foreignKey: 'localizacao', as: 'Localizacao' });

Categoria.hasMany(Livro, { foreignKey: 'categoria', as: 'livros' });
Autor.hasMany(Livro, { foreignKey: 'autor', as: 'livros' });
Editora.hasMany(Livro, { foreignKey: 'editora', as: 'livros' });
Localizacao.hasMany(Livro, { foreignKey: 'localizacao', as: 'livros' });