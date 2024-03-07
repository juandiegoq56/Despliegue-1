const ActiveDirectory = require('activedirectory2');
const jwt = require('jsonwebtoken');

module.exports.loginAD = (req, res) => {
  try {
    const Nombre = req.body.Nombre;
    const Nombre1=req.body.Nombre + '@aztecom.corp';
    const password = req.body.password;
    const filter = `(sAMAccountName=${Nombre})`; // Filtrar por número de empleado
    const attributes = ['cn', 'employeeID', 'mail', 'department','displayName'];

    const config = {
      url: 'ldap://10.142.16.225',
      baseDN: 'DC=aztecom,DC=corp',
      username: Nombre1,
      password: password
    };

    const ad = new ActiveDirectory(config);

    // Intentar autenticar al usuario primero
    ad.authenticate(Nombre1, password, (err, auth) => {
      if (err) {
        console.error('Error al autenticar usuario:', err);
        res.status(500).send("Error interno del servidor al autenticar usuario");
        return;
      }

      if (!auth) {
        console.log('Credenciales incorrectas');
        res.status(401).send("Credenciales incorrectas");
        return;
      }

      // Si la autenticación es exitosa, buscar al usuario
      ad.findUsers({ filter, attributes }, (err, users) => {
        if (err) {
          console.error('Error al buscar usuario:', err);
          res.status(500).send("Error interno del servidor al buscar usuario");
          return;
        }

        if (!users || users.length === 0) {
          console.log('Usuario no encontrado');
          res.status(404).send("Usuario no encontrado");
          return;
        }

        console.log('Usuario encontrado:', users[0]);
        if (users[0].department === 'NOC') {
          let nombreCompleto=users[0].displayName
          const token = jwt.sign({ nombreCompleto}, "Stack", {
            expiresIn: '7m'
          });
          
          res.send({ token });
        } else {
          res.status(401).send("Credenciales invalidas o usuario no autorizado.");
        }
      });
    });
  } catch (error) {
    console.error('Error en la operación:', error);
    res.status(500).send("Error interno del servidor");
  }
};
