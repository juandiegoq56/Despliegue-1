const mysql =require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "usuarios",
  });
  module.exports = connection;