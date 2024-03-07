    import axios from 'axios';
    const response = await axios.get('http://localhost:3001/usuarios');
    const apps = response.data;
    
      export default apps

      