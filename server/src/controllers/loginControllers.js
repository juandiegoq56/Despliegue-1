const connection = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.login = (req, res) => {
  const Nombre = req.body.Nombre;
  const password = req.body.password;
  const consult = "SELECT * FROM usuarios WHERE Nombre = ?";

  try {
    connection.query(consult, [Nombre], (err, result) => {
      if (err) {
        res.status(500).send('Error al realizar la consulta');
      } else {
        if (result.length > 0) {
          const hashedPassword = result[0].password;
          const token = jwt.sign({ Nombre }, "Stack", {
            expiresIn: '1m'
          });
          bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
              console.log(err);
              res.status(500).send("Error al comparar las contraseñas");
            } else {
              if (isMatch) {
                // Si las contraseñas coinciden, el usuario es autenticado correctamente
                res.send({ token });
              } else {
                // Si las contraseñas no coinciden, se envía un mensaje de error
                res.status(401).send("Nombre de usuario o contraseña incorrectos");
              }
            }
          });
        } else {
          // Si no se encuentra ningún usuario con el nombre proporcionado
          res.status(401).send("Nombre de usuario o contraseña incorrectos");
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
}
