// datosUsuario.js

// Función para decodificar el token JWT
function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  let nombreCompleto = '';
  let numeroEmpleado = '';
  let email='';
  let departamento='';
  let cargo=''
  if(localStorage.getItem('token')===null){
  nombreCompleto = '';
  numeroEmpleado = '';
  email='';
  departamento='';
  cargo=''
  }else{
// Obtiene el token del localStorage y lo decodifica
const payload = parseJwt(localStorage.getItem('token'));
// Extrae las variables que deseas exportar
 nombreCompleto = payload.nombreCompleto;
 numeroEmpleado = payload.numeroEmpleado;
 email=payload.email;
 departamento=payload.departamento;
 cargo=payload.cargo
}
// Exporta las variables para que puedan ser utilizadas en otros archivos
export { nombreCompleto, numeroEmpleado,email,departamento,cargo};
