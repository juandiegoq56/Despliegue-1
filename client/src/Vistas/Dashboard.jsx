import React from 'react';
import Header from './headeraz';
import 'bootstrap/dist/css/bootstrap.css';
import { useTrail, animated} from "react-spring";
import "../css/Dashboard.css";
import apps from './Apps'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Dashboard = () => {
  
  const location = useLocation();


  useEffect(() => {
    if (location.search.includes('fromEdit=true')) {
      // If the parameter is present, reload the page
      window.location.reload();
      window.location.href = window.location.pathname;
    }
  }, [location.search]);
  
  const Herramientas = apps.filter(app => app.tipo === 'Herramientas de monitoreo');
  const Gestores = apps.filter(app => app.tipo === 'Gestores');
  const Herramientas_ITMS = apps.filter(app => app.tipo === 'Herramientas_ITSM');
  const CRM= apps.filter(app => app.tipo === 'CRM');
  const Sistema_Reportes= apps.filter(app => app.tipo === 'Sistemas de Reporte');
  const IAM= apps.filter(app => app.tipo === 'Herramientas IAM');
  const CAN= apps.filter(app => app.tipo === 'Control de Acceso al Nodo');

  
  
  return (
  <>
   <body class="vista3">
  <Header />
    <div className="card-container">
    <div className='contenedor'>
    <h1>Herramientas de monitoreo</h1>
      <div className='herramientas'>
      {Herramientas.map((animation, index) => (
        <animated.a
          key={index}
          href={Herramientas[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        >
              <div className='centrar_img'>
              <img width='50' height='50' src={`data:image/png;base64,${Herramientas[index].imagen}`}/>
              </div>
              <h1>{Herramientas[index].nombre }</h1>
              <p>{Herramientas[index].descripcion}</p>
        </animated.a>
      ))}
      </div>
      <h1>Gestores</h1>
      <div className='Gestores'>
      {Gestores.map((animation, index) => (
        <animated.a
          key={index}
          href={Gestores[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        >
              <div className='centrar_img'>
              <img width='50' height='50' src={`data:image/png;base64,${Gestores[index].imagen}`}/>
              </div>
              <h1>{Gestores[index].nombre}</h1>
              <p>{Gestores[index].descripcion}</p>
        </animated.a>
      ))}
      </div>
    <h1>CRM</h1>
<div className='Gestores'>
{CRM.map((animation, index) => (
    <animated.a
      key={index}
      href={CRM[index].url}
      target="_blank"
      rel="noopener noreferrer"
      style={animation}
      className="card"
    >
          <div className='centrar_img'>
          <img width='50' height='50' src={`data:image/png;base64,${CRM[index].imagen}`}/>
          </div>
          <h1>{CRM[index].nombre}</h1>
          <p>{CRM[index].descripcion}</p> 
    </animated.a>
  ))}
</div>
<h1>Sistemas de Reporte</h1>
<div className='Gestores'>
{Sistema_Reportes.map((animation, index) => (
    <animated.a
      key={index}
      href={Sistema_Reportes[index].url}
      target="_blank"
      rel="noopener noreferrer"
      style={animation}
      className="card"
    >
          <div className='centrar_img'>
          <img width='50' height='50' src={`data:image/png;base64,${Sistema_Reportes[index].imagen}`}/>
          </div>
          <h1>{Sistema_Reportes[index].nombre}</h1>
          <p>{Sistema_Reportes[index].descripcion}</p>
    </animated.a>
  ))}
</div>
<h1>Herramientas IAM</h1>
<div className='Gestores'>
{IAM.map((animation, index) => (
    <animated.a
      key={index}
      href={IAM[index].url}
      target="_blank"
      rel="noopener noreferrer"
      style={animation}
      className="card"
    >
          <div className='centrar_img'>
          <img width='50' height='50' src={`data:image/png;base64,${IAM[index].imagen}`}/>
          </div>
          <h1>{IAM[index].nombre}</h1>
          <p>{IAM[index].descripcion}</p>
    </animated.a>
  ))}
</div>
<h1> Control de Acceso al Nodo</h1>
<div className='Gestores'>
{CAN.map((animation, index) => (
    
    <animated.a
      key={index}
      href={CAN[index].url}
      target="_blank"
      rel="noopener noreferrer"
      style={animation}
      className="card"
    >
          <div className='centrar_img'>
          <img width='50' height='50' src={`data:image/png;base64,${CAN[index].imagen}`}/>
          </div>
          <h1>{CAN[index].nombre}</h1>
          <p>{CAN[index].descripcion}</p>
    </animated.a>
  ))}
</div>
    <h1>Herramientas_ITSM</h1>
    <div className='dashboard'>
    {Herramientas_ITMS.map((animation, index) => (
        
        <animated.a
          key={index}
          href={Herramientas_ITMS[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        >
              <div className='centrar_img'>
              <img width='50' height='50' src={`data:image/png;base64,${Herramientas_ITMS[index].imagen}`}/>
              </div>
              <h1>{Herramientas_ITMS[index].nombre}</h1>
              <p>{Herramientas_ITMS[index].descripcion}</p>
        </animated.a>
      ))}
    </div>

    </div>
    </div>
    </body>
    </>
  );    
};
export default Dashboard;