const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //origin - incluir o endereco de producao http://www.endereco.com
app.use(express.json()); // Antes das requisições, converter o json de requisição em objecto javascript - Utilizado no Request Body
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *    Ex: /users/?page=2&name=Leonardo
 * Route Params: Parâmetros utilizados para identificar recursos
 *    Ex: /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * Bancos de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
 * Driver: SEELCT * FROM users
 * Query Builder: table('users').select('*').where()
 */
