import App3 from './Vistas/login';
import Dashboard from './Vistas/Dashboard';
import {ProtectedRoute} from "./components/middelware";
import {ProtectedRouteLogin} from "./components/middelware";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App5 from './Vistas/Perfil'

const Main = () => {
  return (
    <Router>
    <Routes>
      
    <Route path="/home" element={<ProtectedRoute  redirectTo="/"><Dashboard /></ProtectedRoute>} />
    <Route path="/" element={<ProtectedRouteLogin  redirectTo="/Home"><App3 /></ProtectedRouteLogin>} />
    <Route path="/perfil" element={<ProtectedRoute  redirectTo="/"><App5 /></ProtectedRoute>} />
    
    
   
      
      {/* Otras rutas */}
    </Routes>
  </Router>
      
  );
}

export default Main;