import { Navigate, Outlet } from "react-router-dom";
import rutas from '../components/useUser';


export const ProtectedRoute = ({ children, redirectTo }) => {
   const isLogged=rutas();
  
  if (isLogged) {
    return children || <Outlet />;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};
export const ProtectedRouteLogin = ({ children, redirectTo }) => {
    
  const isLogged=rutas();
  
    if (!isLogged) {
      return children || <Outlet />;
    } else {
      return <Navigate to={redirectTo} replace />;
    }
  };
  export const logout = () => {
    localStorage.removeItem('token');
    
  };
  export const ProtectedAdmin = ({ children, redirectTo }) => {
    const admin=localStorage.getItem('admin');
    const isLogged=rutas();
   if (admin && isLogged) {
     return children || <Outlet />;
   } else {
     return <Navigate to={redirectTo} replace />;
   }
 };
  
export default {ProtectedRoute,ProtectedRouteLogin,ProtectedAdmin};