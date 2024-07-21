# API de Biblioteca

## Descrição

Esta API permite gerenciar livros, categorias, autores, editoras e localizações em uma biblioteca. A API suporta operações CRUD (Create, Read, Update, Delete) para todos os recursos.

## Componentes

### Livro
Um livro contém informações sobre os livros disponíveis na biblioteca.
- **Atributos**:
  - `codigo`: Identificador único do livro.
  - `titulo`: Título do livro.
  - `isbn`: Código ISBN do livro.
  - `edicao`: Edição do livro.
  - `anopublicacao`: Ano de publicação do livro.
  - `quantidade`: Quantidade de exemplares disponíveis.
  - `categoria`: Categoria do livro.
  - `autor`: Autor do livro.
  - `editora`: Editora do livro.
  - `localizacao`: Localização do livro na biblioteca (estante e prateleira).

### Categoria
Uma categoria agrupa livros por temas ou gêneros.
- **Atributos**:
  - `codigo`: Identificador único da categoria.
  - `nome`: Nome da categoria.

### Autor
Um autor contém informações sobre os autores dos livros.
- **Atributos**:
  - `codigo`: Identificador único do autor.
  - `nome`: Nome do autor.

### Editora
Uma editora contém informações sobre as editoras dos livros.
- **Atributos**:
  - `codigo`: Identificador único da editora.
  - `nome`: Nome da editora.

### Localização
Uma localização especifica onde os livros estão armazenados na biblioteca.
- **Atributos**:
  - `codigo`: Identificador único da localização.
  - `estante`: Número da estante.
  - `prateleira`: Número da prateleira.

## Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

### Descrição das Tecnologias

- **JavaScript**: Linguagem de desenvolvimento utilizada para escrever a lógica da API.
- **PostgreSQL**: Banco de dados utilizado para armazenar os dados.
- **Express.js**: Framework para comunicação HTTP que facilita a criação de servidores web.
- **Sequelize**: ORM (Object-Relational Mapping) para a persistência dos dados.
- **Postman**: Ferramenta para testes de API, permitindo a criação, execução e documentação de requisições HTTP.
- **Chai**: Biblioteca de assertions para testes.


## Recursos

A API possui os seguintes recursos:

### Livros
- **GET /livro**: Lista todos os livros.
- **POST /livro**: Cria um novo livro.
- **PUT /livro**: Atualiza um livro existente.
- **GET /livro/{id}**: Retorna os detalhes de um livro específico pelo ID.
- **DELETE /livro/{id}**: Deleta um livro pelo ID.

### Categorias
- **GET /categoria**: Lista todas as categorias.
- **POST /categoria**: Cria uma nova categoria.
- **PUT /categoria**: Atualiza uma categoria existente.
- **GET /categoria/{id}**: Retorna os detalhes de uma categoria específica pelo ID.
- **DELETE /categoria/{id}**: Deleta uma categoria pelo ID.

### Autores
- **GET /autor**: Lista todos os autores.
- **POST /autor**: Cria um novo autor.
- **PUT /autor**: Atualiza um autor existente.
- **GET /autor/{id}**: Retorna os detalhes de um autor específico pelo ID.
- **DELETE /autor/{id}**: Deleta um autor pelo ID.

### Editoras
- **GET /editora**: Lista todas as editoras.
- **POST /editora**: Cria uma nova editora.
- **PUT /editora**: Atualiza uma editora existente.
- **GET /editora/{id}**: Retorna os detalhes de uma editora específica pelo ID.
- **DELETE /editora/{id}**: Deleta uma editora pelo ID.

### Localizações
- **GET /localizacao**: Lista todas as localizações.
- **POST /localizacao**: Cria uma nova localização.
- **PUT /localizacao**: Atualiza uma localização existente.
- **GET /localizacao/{id}**: Retorna os detalhes de uma localização específica pelo ID.
- **DELETE /localizacao/{id}**: Deleta uma localização pelo ID.

## Como Utilizar

1. Clone o repositório:
    ```bash
    git clone https://github.com/estefaniferlin/biblioteca_SW_API.git
    ```

2. Instale as dependências:
    ```bash
    cd biblioteca_SW_API
    npm install
    ```

3. Execute o servidor em modo de desenvolvimento:
    ```bash
    npm run start:dev
    ```

4. Acesse a API em [http://localhost:3002](http://localhost:3002).

## Testes

Para rodar os testes utilizando Chai, execute:
```bash
npm test
