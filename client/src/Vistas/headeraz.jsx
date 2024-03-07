import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/head.css";
import logo from "../Content/logo.svg";
import React, { useState} from 'react';
import { nombreCompleto, numeroEmpleado } from '../components/datos'
import rutas from '../components/useUser';

const Header = () => {
  //const isLogged=false;
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = rutas()
  
  const tipo= localStorage.getItem('admin')
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
   
    
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('Nombre')
    localStorage.removeItem('admin')
    localStorage.removeItem('tipo')
    
  };
 
  return (
    <header id="header " class="fixed-top bg-white shadow-lg"style={{ marginBottom: '20px' }}>
      <div class="bg-azulO ">
        <ul class="nav">
          <li class="nav-item nav-item pt-xl-1 pt-lg-1">
            <a className="nav-link c-grisO p-xl-2 p-lg-2 text-white sin-hover" aria-current="page" href="https://www.aztecacomunicaciones.com/content/ISP-e-Integradores/ISP-e-Integradores/" target="_blank">ISP e Integradores</a>
          </li>
          <li class="nav-item nav-item pt-xl-1 pt-lg-1">
            <a class="nav-link c-grisO p-xl-2 p-lg-2 text-white  " aria-current="page" href="https://www.aztecacomunicaciones.com/content/ISP-e-Integradores/ISP-e-Integradores/" target="_blank">Empresarial</a>
          </li>
          <li class="nav-item nav-item pt-xl-1 pt-lg-1">
            <a class="nav-link c-grisO p-xl-2 p-lg-2 text-white  " aria-current="page" href="https://www.aztecacomunicaciones.com/content/wholesale/wholesale/" target="_blank">Wholesale</a>
          </li>
          <li class="nav-item nav-item pt-xl-1 pt-lg-1">
            <a class="nav-link c-grisO p-xl-2 p-lg-2 text-white  " aria-current="page" href="https://www.aztecacomunicaciones.com/content/gobierno/gobierno/" target="_blank">Gobierno</a>
          </li>
        </ul>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isOpen ? 'open' : ''}`}>
        <div class="container">
          <a class="navbar-brand" href="/home">
            <img className="logo-azteca" src={logo} alt="logo Azteca Comunicaciones" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={toggleMenu} data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="justify-content-end">
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul class="navbar-nav mb-lg-0 ">
                <li class="nav-item dropdown c-text fw-bold mt-xl-2 mt-lg-2 mt-md-0 mt-sm-0 mt-0">
                  <a class="nav-link dropdown-toggle" href="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Acerca de Azteca</a>
                  <ul class="dropdown-menu fade-up" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/azteca/quienes-somos/" target="_blank" >Qui&#233;nes Somos</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.gruposalinas.com/" target="_blank">Grupo Salinas</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/Contenido/Boletin/" target="_blank" >Bolet&#237;n</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/azteca/pnfo/" target="_blank" >PNFO</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/azteca/trabaja-con-nosotros/" target="_blank" >Trabaja con nosotros</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown c-text fw-bold mt-xl-2 mt-lg-2 mt-md-0 mt-sm-0 mt-0">
                  <a class="nav-link dropdown-toggle" href="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Atenci&#243;n al cliente</a>
                  <ul class="dropdown-menu fade-up" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/atencion-al-cliente/canales-de-atencion/" target="_blank" >Canales de atenci&#243;n</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/atencion-al-cliente/codigo-de-digitalizacion/" target="_blank" > C&#243;digo de digitalizaci&#243;n </a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/viewfile?parameter=InformacionUsuarios/MantenimientosProgramados.pdf" target="_blank" >Mantenimientos programados</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown c-text fw-bold mt-xl-2 mt-lg-2 mt-md-0 mt-sm-0 mt-0">
                  <a class="nav-link dropdown-toggle" href="/login" id="navbarDropdown" role="button" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Informaci&#243;n importante para el usuario
                  </a>
                  <ul class="dropdown-menu fade-up" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/mapa-cobertura-fibra/" target="_blank" >Mapa de cobertura de transmisi&#243;n de fibra &#243;ptica</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/area-cubrimiento/" target="_blank" >&#193;rea de cubrimiento</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/comparador-de-tarifas/" target="_blank" >Comparador de tarifas</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/viewfile?parameter=InformacionUsuarios/FactoresLimitaci%C3%B3nVelocidad.pdf" target="_blank">Factores limitaci&#243;n velocidad de internet</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/practicas-gestion-trafico/" target="_blank" >Pr&#225;cticas de gesti&#243;n del tr&#225;fico</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/test-de-velocidad/" target="_blank" >Test de velocidad</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/indicadores-calidad-servicio-internet/" target="_blank" >Indicadores de Calidad del Servicio de Internet</a></li>
                    <li><a class="dropdown-item c-azulO" href="https://www.aztecacomunicaciones.com/content/informacion-importante-usuario/procedimiento-y-tramite-pqr" target="_blank" >Procedimiento y Tr&#225;mite PQR</a></li>
                  </ul>
                </li>
                <li class="nav-item text-center mt-xl-2 mt-lg-2 mt-md-0 mt-sm-0 mt-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-0 mb-2 mx-1">
                {!isLogged ? null : (
                  <a href='/perfil' className="nav-link bg-acc-yellow rounded-pill pse" target="_blank">
                    USUARIO: {nombreCompleto}  {tipo ? "(Admin)" : "(Usuario)"}
                  </a>
              )}

                </li>
                <li class="nav-item text-center mt-xl-2 mt-lg-2 mt-md-0 mt-sm-0 mt-0  mb-xl-0 mb-lg-0 mb-md-0 mb-sm-0 mb-2">
                {isLogged ? (
            <a href="/" onClick={handleLogout} class="nav-link bg-acc-yellow rounded-pill pse" >Cerrar sesión</a>
            
            ): (
              <a href="/" class="nav-link bg-acc-yellow rounded-pill pse" >Iniciar sesión</a>
            )}
            
                </li>
                
                <li class="nav-item text-center mt-xl-2 mt-lg-2 mt-md-0 mt-sm-0 mt-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-0 mb-2 mx-1">
                 
               
                </li>
               
              </ul>
            </div>
          </div>
        </div>  
      </nav>

    </header>
  );
};

export default Header;
