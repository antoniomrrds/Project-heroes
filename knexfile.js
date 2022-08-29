require('dotenv').config()
module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host :  process.env.DB_HOST,
      port : process.env.DB_PORT,
  },
    migrations: {
      tableName: 'knex_migrations',
      directory:`${__dirname}/src/database/migrations` 
    }
}
}