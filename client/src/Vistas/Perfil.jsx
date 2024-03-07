import "../css/perfil.css";
import Header from './headeraz';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import rutas from '../components/useUser';
import { Link } from 'react-router-dom';
function App5() {

    const nombreCompleto=rutas();
    const Admin=localStorage.getItem('admin')

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
                    <p class="datos">EMPLEADO:{nombreCompleto} </p>
                    {!Admin ? null :  <a href='/editar' class="nav-link bg-acc-yellow rounded-pill pse" > Editar Usuario  </a>}
                    {!Admin ? null :  <a href='/crear' class="nav-link bg-acc-yellow rounded-pill pse" > Crear Crear Usuario </a>}
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