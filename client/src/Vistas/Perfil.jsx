import "../css/perfil.css";
import Header from './headeraz';
import rutas from '../components/useUser';
function App5() {

    const nombreCompleto=rutas();
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
                  <p className="perfil-datos">EMPLEADO:{nombreCompleto} </p>
                  {Admin ? null :  <a href='/editar' className="perfil-nav-link bg-acc-yellow rounded-pill pse" > Editar Usuario  </a>}
                  {Admin ? null :  <a href='/crear' className="perfil-nav-link bg-acc-yellow rounded-pill pse" > Crear Crear Usuario </a>}
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