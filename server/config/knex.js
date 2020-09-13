const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "12345678",
    database: "streamspree",
  },
});
// console.log(knex);
module.exports = knex;
