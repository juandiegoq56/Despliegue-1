
import '../css/Login.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './headeraz';


const App3 = () => {
    const[Nombre,setNombre]=useState("");
    const [password, setPassword] = useState('');
    const handdleLogin = (e) =>{
      e.preventDefault();
      const data = {
          Nombre: Nombre,
          password: password
      };
      fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Credenciales Incorrectas');
        }
    })
    .then(result => {
        if (result.token) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('Nombre',Nombre)
            
            // Redirigir al usuario a la página de inicio
            window.location.href = '/home';
        } else {
            throw new Error('Nombre de usuario o contraseña incorrectos');
        }
    })
    .catch(error => {
        alert(error.message); // Muestra el mensaje de error en un alert
    });
}
 
// <Header /> onSubmit={handleSubmit}
  return (
  

<>
  
<Header /> 
  
  <body class="vista1">
  <div className="container1">
    <div className="card1-body">
      <div className="centrar">
        
          <form >
            <div className="input-group mb-3">
            <span id="nombre-label" className="input-group-text">Nombre</span>

              <input
                type="text"
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
                className="form-control"
                placeholder="Ingrese su Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="nombre-label">Contraseña</span>
              <input
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
                placeholder="Ingrese su Contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className='boton'>
            <button className="btn btn-success"  onClick={handdleLogin}>Login</button>
            </div>
          </form>
          
        
      </div>
      
    </div>
    <h5  className="blue" id="id-company-text">© Azteca Comunicaciones Colombia-2023</h5>

  </div>
  </body>
</>

    
    

  );
};


export default App3;
