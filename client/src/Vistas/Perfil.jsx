import "../css/perfil.css";
import Header from './headeraz';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App5() {
    
    const [usuariosList, setUsuarios] = useState([]);
   
    useEffect(() => {
        const val = async () => {
          try {
            const response = await axios.get('http://localhost:3001/usuarios');
            const nombre = localStorage.getItem("Nombre");
            const data = response.data;
            const user = data.find(user => user.Nombre === nombre);
            setUsuarios(user);
          } catch (error) {
            console.error(error);
          }
        };
    
        val(); 
    
        
    
      }, []);
    
   
      
    
    return (
        <body>
     <div className="separar">
     <Header />
     </div>
     
        <main>
        
        <div class="margin-left"></div>

        <div class="principal">
            <div class="containerper">

                <section class="perfil">
                    <h2>Perfil de usuario</h2>
                </section>
                <section class="title-image">
                    <div class="titleFoto"> 
                        <h4>Foto de perfil:</h4>
                    </div>
                    <div class="img">
                       
                    </div>
                </section>
                <section class="informacion">
                    <h4>Sus datos Son:</h4>
                    <p class="datos">Nombre:{usuariosList.Nombre} </p>
                    <p class="datos">Apellidos: {usuariosList.Apellido} </p>
                    <p class="datos">Email: {usuariosList.Email} </p>
                    <p class="datos">Fecha de nacimiento: </p>
                </section>
                <section class="botones"> 
                    <div class="buttonEditar">
                        <form action="/users/editar/<%= user.id %>" method="get" >
                           
                        </form>
                    </div> 
                </section>
            </div>

            <div class="picture">
                
            </div> 
             
        </div>

        <div class="margin-right"></div>
          
    </main>
    </body>
    );
  }
  
  export default App5;