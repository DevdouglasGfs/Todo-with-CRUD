import type { Knex } from "knex";

export default  {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/server/db/todo.sqlite3",
    },
    useNullAsDefault: true,
    migrations:{
      extension: "ts"
    }
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./src/server/db/todo.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      extension: "ts"
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./src/server/db/todo.sqlite3",
      // flags:['useNullAsDefault']
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      extension: "ts"
    }
  }

};