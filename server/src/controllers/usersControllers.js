const connection = require('../models/db');

module.exports.users= (req, res) => {

    connection.query("SELECT * FROM usuarios", (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al obtener los usuarios");
        } else {
          res.send(result);
        }
      });
}