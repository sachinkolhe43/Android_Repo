const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "dmc_db",
})

connection.connect()

module.exports = connection
