const connection = require('../models/db');

module.exports.users = (req, res) => {
  const nombreUsuario = req.body.Nombre;

  connection.query("SELECT * FROM UsuariosAdmin WHERE usuario= ?", [nombreUsuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al obtener el usuario");
    } else {
      if (result.length === 0) {
        res.send({ exists: false }); // Usuario no encontrado
        console.log(result)
        
      } else {
        const tipoAdmin = result[0].tipo_admin;
        res.send({ exists: true, tipoAdmin }); // Usuario encontrado, devolver tipo admin
        console.log(tipoAdmin)
      }
    }
  });
};
