import "../css/perfil.css";
import Header from './headeraz';
import rutas from '../components/useUser';
import { nombreCompleto, numeroEmpleado,email,departamento,cargo } from '../components/datos'
function App5() {
    const Admin=localStorage.getItem('admin')

    return (
        <body>
          <div className="perfil-separar">
            <Header />
          </div>
          <main className="perfil-main">
            <div className="perfil-margin-left"></div>
            <div className="perfil-principal">
              <div className="perfil-containerper">
                <section className="perfil-perfil">
                  <h2>Perfil de usuario</h2>
                </section>
                <section className="perfil-title-image">
                  <div className="perfil-titleFoto"> 
                    <h4>Foto de perfil:</h4>
                  </div>
                  <div className="perfil-img"></div>
                </section>
                <section className="perfil-informacion">
                  <h4>Sus datos Son:</h4>
                  <p className="perfil-datos">Empleado:{nombreCompleto} </p>
                  <p className="perfil-datos">Numero de Empleado:{numeroEmpleado} </p>
                  <p className="perfil-datos">Cargo:{cargo} </p>
                  <p className="perfil-datos">Departamento:{departamento} </p>
                  <p className="perfil-datos">Email:{email} </p>
                  {!Admin ? null :  <a href='/editar' className="perfil-nav-link bg-acc-yellow rounded-pill pse" > Editar Usuario  </a>}
                  {!Admin ? null :  <a href='/crear' className="perfil-nav-link bg-acc-yellow rounded-pill pse" > Crear Crear Usuario </a>}
                </section>
              </div>
              <div className="perfil-picture"></div> 
            </div>
            <div className="perfil-margin-right"></div>
          </main>
        </body>
      );
      
  }
  
  export default App5;