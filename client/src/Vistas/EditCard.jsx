import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,useLocation} from 'react-router-dom'; // Importa el componente Link
import Header from './headeraz';
const EditCard = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (location.search.includes('fromEdit=true')) {
      // If the parameter is present, reload the page
      window.location.reload();
      window.location.href = window.location.pathname;
    }
  }, [location.search]);
  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/usuarios/${id}`)
      .then(response => {
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
        <div><Header /></div>
        
      <h1>Aplicativos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Eliminar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Eliminar</button>
              </td>
              <td>
                 {/* Agrega un botón de editar que redirija al formulario de edición */}
                <Link to={`/editar/${item.id}`}>
                  <button className="btn-edit">Editar</button>
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditCard;
