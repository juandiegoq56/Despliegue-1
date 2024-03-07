const ActiveDirectory = require('activedirectory2');

// Configuración de conexión LDAP
const config = {
  url: 'ldap://10.142.16.225',
  baseDN: 'DC=aztecom,DC=corp',
  
};

// Crear instancia de ActiveDirectory
const ad = new ActiveDirectory(config);

module.exports = ad;
