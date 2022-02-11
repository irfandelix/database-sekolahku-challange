const { Pool } = require('pg')

const connection = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "sekolahku",
  port: 5432,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 5000,
  max: 100
})

module.exports = connection