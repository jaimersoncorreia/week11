const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); //o body como json
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
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?"(Fitros, paginação).Ex:/users?page=2&nome=Sofia&idade=6
 * Route Params: Parâmetros utilizados para identificar recursos. Ex:/users/1
 * Request Boby: Corpo da requisição, utilizado pra criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where('')
 */
