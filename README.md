# Aplicação RESTful de CRUD de Usuários

Este projeto é uma aplicação Node.js que utiliza Express e Prisma para realizar operações CRUD em usuários, onde cada usuário possui um `id` autoincremental, `nome`, e `email` único. Os dados são persistidos em um banco de dados Neon.

## Configuração

Antes de começar, certifique-se de ter o Node.js instalado na sua máquina. Em seguida, siga estes passos:

1. Clone o repositório para sua máquina local:

   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   

2. Acesse o diretório do projeto:

   cd nome-do-repositorio
   

4. Instale as dependências:
   
   npm install
   

6. Configure o banco de dados Neon em `.env`:

   env
   DATABASE_URL="neon:./prisma/dev.db"
   

7. Execute as migrações do banco de dados:

   npx prisma migrate dev
   

## Executando a Aplicação

Para iniciar a aplicação, use o seguinte comando:

npm start


## Rotas CRUD

- *Criar Usuário (POST):*

  http
  POST http://localhost:5555/user
  
  //Post foi feito pelo Prisma Studio

  Corpo da requisição (JSON):

  json
  {
    "nome": "Nome do Usuário",
    "email": "usuario@email.com"
  }
  

- *Listar Todos os Usuários (GET):*

  http
  GET http://localhost:5555/user
  

- *Buscar Usuário por ID (GET):*

  http
  GET http://localhost:5555/user/:id
  

- *Atualizar Usuário por ID (PUT):*

  http
  PUT http://localhost:5555/user/:id
  
  Content-Type: application/json

  Corpo da requisição (JSON):

  json
  {
    "nome": "Novo Nome"
  }
  

- *Excluir Usuário por ID (DELETE):*

  http
  DELETE http://localhost:5555/user/:id
  

## Tratamento de Erros

A aplicação retorna mensagens de erro em JSON, fornecendo informações detalhadas sobre o motivo do erro.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou relatar problemas abrindo uma issue ou enviando um pull request. Seja respeitoso e siga as diretrizes de contribuição.
