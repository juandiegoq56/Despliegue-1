import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de haber instalado axios previamente
import { useNavigate  } from 'react-router-dom';
import '../css/create.css'
export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');
  const [tipo, setTipo] = useState(''); // Establecer el estado inicial como una cadena vacía
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();
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

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('url', url);
      formData.append('tipo', tipo);
      formData.append('imagen', imagen);

      // Enviamos todos los datos al backend
      await axios.post('http://localhost:3001/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Mostrar alerta y restablecer los campos
      navigate('/d1?fromEdit=true');
      resetCampos();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const resetCampos = () => {
    setNombre('');
    setDescripcion('');
    setUrl('');
    setTipo(''); // Restablecer el campo 'Tipo' a vacío
    setImagen(null);
  };

  return (
    <div className="crear-aplicativo p-6 formulario-limited">
      <h1>Crear Aplicativo</h1>
      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
        Nombre
      </label>
      <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
  
      <label htmlFor="descripcion" className="block mt-4 text-sm font-medium text-gray-700">
        Descripción
      </label>
      <textarea id="descripcion" value={descripcion} onChange={handleDescripcionChange} rows="3" className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
  
      <label htmlFor="url" className="block mt-4 text-sm font-medium text-gray-700">
        URL
      </label>
      <input type="text" id="url" value={url} onChange={handleUrlChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
  
      <label htmlFor="tipo" className="block mt-4 text-sm font-medium text-gray-700">
        Tipo
      </label>
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
  
      <label htmlFor="imagen" className="block mt-4 text-sm font-medium text-gray-700">
        Imagen
      </label>
      <input type="file" id="imagen" onChange={handleImagenChange} accept="image/*" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
  
      <button onClick={handleSubmit} className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Guardar</button>
    </div>
  );
  
}
