import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate  } from 'react-router-dom';

const EditForm = () => {

  const { id } = useParams(); // Obtener el ID del elemento de la URL
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');
  const [tipo, setTipo] = useState('Herramientas de monitoreo'); // Selección por defecto
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  useEffect(() => {
    axios.get(`http://localhost:3001/usuarios/${id}`)
      .then(response => {
        const { nombre, descripcion, url, tipo } = response.data;
        setNombre(nombre);
        setDescripcion(descripcion);
        setUrl(url);
        setTipo(tipo);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleImagenChange = (event) => {
    setImagen(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!imagen) {
        setError('Por favor seleccione una imagen');
        return;
      }

      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('url', url);
      formData.append('tipo', tipo);
      formData.append('imagen', imagen);

      await axios.put(`http://localhost:3001/usuarios/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      
      navigate('/d2?fromEdit=true');
      


    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div>
      <h1>Editar Datos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={handleDescripcionChange}
            rows="3"
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
        <select id="tipo" value={tipo} onChange={handleTipoChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value="">Seleccionar...</option> {/* Opción predeterminada vacía */}
        <option value="Herramientas de monitoreo">Herramientas de monitoreo</option>
        <option value="Gestores">Gestores</option>
        <option value="Sistemas de Reporte">Sistemas de Reporte</option>
        <option value="Herramientas IAM">Herramientas IAM</option>
        <option value="Control de Acceso al Nodo">Control de Acceso al Nodo</option>
        <option value="Herramientas_ITSM">Herramientas_ITSM</option>
        <option value="CRM">CRM</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            onChange={handleImagenChange}
            accept="image/*"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        
        <button >Guardar cambios</button>
        
      </form>
    </div>
  );
};

export default EditForm;
