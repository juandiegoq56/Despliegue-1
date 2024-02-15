import React from 'react';
import Header from './headeraz';
import 'bootstrap/dist/css/bootstrap.css';
import { useTrail, animated,useSpring } from "react-spring";

import "../css/Dashboard.css";
const Dashboard = () => {
  
  const apps = [
    {
      name: 'DWG',
      description: 'Descripción de la aplicación 1',
      url: 'http://dwg.azteca-comunicaciones.com/index.jsp?option=net.comtor.gui.admin.DiagnosticNE',
      tipo:'2',
      img:require("../Content/DWG.svg").default
    },
    {
      name: 'SAR',
      description: 'Descripción de la aplicación 2',
      url: 'https://sar.azteca-comunicaciones.com:8144/Login',
      tipo:'6',
      img:require("../Content/software.svg").default
    },
    {
      name: 'Plan de Mejoramiento',
      description: 'Descripción de la aplicación 3 ',
      url: 'http://192.168.2.34/plan_mejoramiento/users/login',
      tipo:'6',
      img:require("../Content/plan-de-desarrollo.svg").default
       
    },
    // Agrega más aplicaciones según sea necesario
    {
      name: 'Suricato',
      description: 'Herramienta de Monitoreo para Rectificadores ',
      url: 'http://192.168.2.31/suricato/users/login',
      tipo:'1',
      img:require("../Content/suricato.svg").default
    },
    {
        name: 'Orion',
        description: 'Herramienta de Monitoreo de  Red ',
        url: 'http://192.168.2.10:8787/Orion/Login.aspx?ReturnUrl=%2fOrion%2fSummaryView.aspx%3fViewID%3d651&ViewID=651',
        tipo:'1',
        img:require("../Content/SolarWinds-Logo.svg").default
      },
      {
        name: 'Cacti',
        description: 'Herramienta de Monitoreo de  Red ',
        url: 'http://192.168.2.31/cacti/',
        tipo:'1',
        img:require("../Content/auth_login.svg").default
        
      },
      { 
        name: 'Cyberark',
        description: 'Herramienta de Gestión de Identidades ',
        url: 'https://cyberacc.aztecom.corp/PasswordVault/auth/ldap',
        tipo:'7',
        img:require("../Content/login-calogo.svg").default
      },
      { 
        name: 'Grafana',
        description: 'Herramienta de Visualizacion y Monitoreo de Red ',
        url: 'http://10.144.2.160:3000/zabbix/zabbix.php?action=dashboard.view',
        tipo:'1',
        img:require("../Content/grafana_icon.svg").default
      },
      { 
        name: 'Potencias Ericsson',
        description: 'Herramienta de visualización de Potencias Ópticas ',
        url: 'http://192.168.2.31/potencias-opticas/?m=potencias_tabla&ip_spo=',
        tipo:'1',
        img:require("../Content/Potenciasericson.svg").default
      },
      { 
        name: 'Node Map',
        description: 'Gestor de Inventario Nodos ',
        url: 'http://192.168.2.31/node-map/users/login',
        tipo:'2',
        img:require("../Content/NodeMap.svg").default
      },
      { 
        name: "Zabbix",
        description: 'Herramienta de Monitoreo de Red ',
        url: 'http://10.144.2.160/zabbix/index.php?request=zabbix.php%3Faction%3Ddashboard.view',
        tipo:'1',
        img:require("../Content/Zabbix.svg").default
        
      },
      { 
        name: "Dataminer_TP",
        description: 'Gestor de Alarmas IPTV',
        url: 'http://10.217.226.152/root/login',
        tipo:'3',
        img:require("../Content/Dataminer.svg").default
      },
      { 
        name: "Dataminer_skyline",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.217.226.152/root/login',
      },
      { 
        name: "Service Desk manager_TP",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://sdm.prod.totalplay.com.mx/CAisd/pdmweb4.exe',
        tipo:'4',
        img:require("../Content/Servidesk.svg").default
      },
      { 
        name: "Service Desk manager",
        description: 'Herramienta de Gestion de TK',
        url: 'http://service-desk.azteca-comunicaciones.com:8080/',
        tipo:'4',
        img:require("../Content/logo1.svg").default
      },
      { 
        name: "Sonda Sentry 1",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.1.172/',
        tipo:'9',
        img:require("../Content/sondas.svg").default
      },
      { 
        name: "Sonda Sentry 2",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.1.173/',
        tipo:'9',
        img:require("../Content/sondas.svg").default
      },
      { 
        name: "Sonda Sentry Verify",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.6.7/?page=&_z=0&',
        tipo:'9',
        img:require("../Content/sondas.svg").default
      },
      { 
        name: "Sondas 3Play",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.1.253:8080',
        tipo:'9',
        img:require("../Content/sondas.svg").default
      },
      { 
        name: "Monitoring_TP",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.217.226.152',
        tipo:'9',
        img:require("../Content/investigacion.svg").default
      },
      { 
        name: "GLPI",
        description: 'Herramienta de ticketing Inventarios y Proyectos ',
        url: 'https://servicedesk.azteca-comunicaciones.com/glpi/',
        tipo:'4',
        img:require("../Content/GLPI.svg").default
      },
      { 
        name: "American Towers",
        description: 'Pagina de Gestion de Permisos ',
        url: 'http://webacesso.americantower.com.co/login/login.aspx',
        tipo:'8',
        img:require("../Content/AmericaTowers.svg").default
      },
      { 
        name: "Equinix",
        description: ' Pagina de Gestión de Permisos',
        url: 'https://auth.equinix.com/login?state=hKFo2SBpRXFBalU3dTVlbDRJdEZKV0pLbnUyTEp2elJlRjlUZ6FupWxvZ2luo3RpZNkgOVFDN2c2czdPYnVDT0hobjlzYThNZ1d2MEYtaEpwVlGjY2lk2SB6aEh3eTdFODdMbFZKT2taWnFSTWhyRUE5czQ5OGFobQ&client=zhHwy7E87LlVJOkZZqRMhrEA9s498ahm&protocol=samlp&SAMLRequest=nVLLTsMwEPyVyPfm0aCqsppIUVpBBJRSqh64mbChkRw7sddt%2BHuch1CkAgeOO9qZ2Rl7pVnFa5oYPIk9NAY0OkdQupQiInPXJ062jkjhHoojLLPnLTTBfXJzJza3zdvT8bzb2wWtDWRCIxNoOf48nPmLWRAeggX1F3QeuOEyfCVOW3Ghae8XEaMElUyXmgpWgaaY05fk8YFaS1oriTKXnMSrbpv2BmrC%2F5vOtAaFNgCJN02bGo2yArWTChlfeRPFQb6mmxZBdIl1j9TcTlRBAcq6dvoRGSfinBk3dj4h1pp6Xj6q1726awssRdm6uay8SeBecTxafbgD4l4qTbx4uOjqCItsrXO23kle5p9Owrm8pAoYWndUBjrqsDc%2BG7z3j5hKgdDiWN0USrltZg%2FFf4o0kNcsV2N9P6l%2BB%2FnlHO%2F6o8Vf&RelayState=xOyFrJ0YdGoTaTTdpR0jziufM5jh1zx',
        tipo:'8',
        img:require("../Content/equinix-horizontal-outlined.svg").default
        
      },
      { 
        name: "NCE_TP",
        description: ' ',
        url: ' https://10.231.1.252:31943/unisso/login.action?service=%2Funisess%2Fv1%2Fauth%3Fservice%3D%252Fncecommonwebsite%252Fv1%252Fnewportal%252Fportal%252Floading%252Floading.html&decision=1',
        tipo:'3',
        description: ' Gestor DWDM y TX para Equipos Huawei',
        img:require("../Content/login-logo.svg").default
      },
      { 
        name: "NCE_ACC",
        description: ' ',
        url: ' https://10.144.2.82:31943/unisso/login.action?service=%2Funisess%2Fv1%2Fauth%3Fservice%3D%252Fnmsnetworkmgrwebsite%252Fv1%252Fwebswing%252Findexforwebswing.html&decision=1#page=QWN0aW9uJTNEY29tLmh1YXdlaS51MjAwMC51bml0ZWRtZ3IudG9wby5hY3Rpb24uRG9XZWJUb3BvQWN0aW9u',
        tipo:'2',
        description: ' Gestor DWDM y TX para Equipos Huawei',
        img:require("../Content/login-logo.svg").default
      },
      { 
        name: "Iptv Manager_TP",
        description: 'Gestor de Contenido (Autenticarse en panel de aplicaciones Portal Socio)',
        url: ' https://iptvmanager.totalplay.com.mx/TPADMINWeb',
        tipo:'3',
        img:require("../Content/Iptv_manager.svg").default
        
      },
      { 
        name: "TP Provisioning UX",
        description: ' Herramienta de gestion Web DWDM y TX para Equipos Huawei (Autenticarse en panel de aplicaciones)',
        url: ' https://ux.totalplay.com.mx/UXKeyDSI/acceso?code=puONclkI-gr2FMj-U902cSdPgKUwwcoEa_BurOhh5TQ&state=validacion',
        tipo:'3',
        img:require("../Content/abastecimiento.svg").default
      },
      { 
        name: "Salesforce TP",
        description: 'CRM',
        url: ' https://totalplay.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Ftotalplay.lightning.force.com%252Fone%252Fone.app',
        tipo:'5',
        img:require("../Content/logo-salesforce.svg").default
      },
      { 
        name: "Salesforce ACC",
        description: 'CRM',
        url: ' https://azteca.my.salesforce.com/?ec=302&startURL=%2F5002M00001emwZ4',
        tipo:'5',
        img:require("../Content/logo-salesforce.svg").default
      },
  ];
  
  const Herramientas = apps.filter(app => app.tipo === '1');
  const Gestores = apps.filter(app => app.tipo === '2');
  const Herramientas_TP = apps.filter(app => app.tipo === '3');
  const Herramientas_ITMS = apps.filter(app => app.tipo === '4');
  const CRM= apps.filter(app => app.tipo === '5');
  const Sistema_Reportes= apps.filter(app => app.tipo === '6');
  const IAM= apps.filter(app => app.tipo === '7');
  const CAN= apps.filter(app => app.tipo === '8');
  const HMTP= apps.filter(app => app.tipo === '9');
  const trail1 = useTrail(Herramientas.length, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 }
  });
  const trail2 = useTrail(Gestores.length, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 }
  });
  const trail3 = useTrail(Herramientas_TP.length, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 }
  });
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
              <img src={Herramientas[index].img} />
              </div>
              <h1>{Herramientas[index].name}</h1>
              <p>{Herramientas[index].description}</p>
              
              
          
        </animated.a>
      ))}
   
      </div>
      <h1>Gestores</h1>
      <div className='Gestores'>
      {trail2.map((animation, index) => (
        
        <animated.a
          key={index}
          href={Gestores[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        
          
        >
              <div className='centrar_img'>
              <img src={Gestores[index].img} />
              </div>
              <h1>{Gestores[index].name}</h1>
              <p>{Gestores[index].description}</p>
              
              
          
        </animated.a>
      ))}
      </div>
      <h1>Herramientas de Gestion TP</h1>

    <div className='dashboard'>
    {trail3.map((animation, index) => (
        
        <animated.a
          key={index}
          href={Herramientas_TP[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        
          
        >     <div className='centrar_img'>
              <img src={Herramientas_TP[index].img} />
              </div>
              <h1>{Herramientas_TP[index].name}</h1>
              <p>{Herramientas_TP[index].description}</p>
              
              
          
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
          <img src={CRM[index].img} />
          </div>
          <h1>{CRM[index].name}</h1>
          <p>{CRM[index].description}</p>
          
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
          <img src={Sistema_Reportes[index].img} />
          </div>
          <h1>{Sistema_Reportes[index].name}</h1>
          <p>{Sistema_Reportes[index].description}</p>
          
          
      
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
          <img src={IAM[index].img} />
          </div>
          <h1>{IAM[index].name}</h1>
          <p>{IAM[index].description}</p>
          
          
      
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
          <img src={CAN[index].img} />
          </div>
          <h1>{CAN[index].name}</h1>
          <p>{CAN[index].description}</p>
          
          
      
    </animated.a>
    
   
  ))}
</div>
<h1>Herramientas de Monitoreo TP</h1>

<div className='dashboard'>
{HMTP.map((animation, index) => (
    
    <animated.a
      key={index}
      href={HMTP[index].url}
      target="_blank"
      rel="noopener noreferrer"
      style={animation}
      className="card"
    
      
    >
          <div className='centrar_img'>
          <img src={HMTP[index].img} />
          </div>
          <h1>{HMTP[index].name}</h1>
          <p>{HMTP[index].description}</p>
          
          
      
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
              <img src={Herramientas_ITMS[index].img} />
              </div>
              <h1>{Herramientas_ITMS[index].name}</h1>
              <p>{Herramientas_ITMS[index].description}</p>
              
              
          
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