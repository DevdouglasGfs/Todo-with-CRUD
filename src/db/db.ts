const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./todo.db.sqlite",
    flags: ['OPEN_URI']
  }
});