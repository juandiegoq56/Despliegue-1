import App3 from './Vistas/login';
import Dashboard from './Vistas/Dashboard';
import EditCard from './Vistas/EditCard';
import EditForm from './Vistas/editarCards'
import Formulario from './Vistas/createCard'
import {ProtectedAdmin, ProtectedRoute} from "./components/middelware";
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
    <Route path="/crear" element={<ProtectedAdmin redirectTo="/"><Formulario /></ProtectedAdmin>} />
    <Route path="/editar" element={<ProtectedAdmin  redirectTo="/"><EditCard /></ProtectedAdmin>} />
    <Route path="/editar/:id" element={<ProtectedRoute redirectTo="/"><EditForm /></ProtectedRoute>} />

   
      
      {/* Otras rutas */}
    </Routes>
  </Router>
      
  );
}

export default Main;