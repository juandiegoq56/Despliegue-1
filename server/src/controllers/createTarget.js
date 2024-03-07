const fs = require('fs');
const connection = require('../models/db');

const insertarDatos = (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { nombre, descripcion, url, tipo } = req.body;
    const imagenPath = req.file.path;

    // Leer la imagen y convertirla a base64
    fs.readFile(imagenPath, (err, data) => {
        if (err) {
            console.error('Error al leer la imagen:', err);
            res.status(500).send('Error al leer la imagen');
            return;
        }

        const imagenBase64 = Buffer.from(data).toString('base64');

        // Realizar la consulta SQL para insertar los datos
        const sql = 'INSERT INTO tarjetas (nombre, descripcion, url, tipo, imagen) VALUES (?, ?, ?, ?, ?)';
        // Aquí, 'tabla' es el nombre de la tabla en tu base de datos

        // Ejecutar la consulta SQL
        connection.query(sql, [nombre, descripcion, url, tipo, imagenBase64], (err, result) => {
            if (err) {
                console.error('Error al insertar los datos:', err);
                res.status(500).send('Error al insertar los datos en la base de datos');
            } else {
                console.log('Datos insertados correctamente');
                res.status(200).send('Datos insertados correctamente');
            }
        });
    });
};

const obtenerTarjetas = (req, res) => {
    connection.query("SELECT * FROM tarjetas", (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error al obtener las tarjetas");
      } else {
        
        res.send(result);
      }
    });
};
const obtenerTarjetaPorId = (req, res) => {
    const id = req.params.id; // Obtener el ID de los parámetros de la solicitud
    connection.query("SELECT * FROM tarjetas WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error al obtener la tarjeta");
      } else {
        if (result.length === 0) {
          // Si no se encuentra ninguna tarjeta con el ID especificado, devolver un error 404
          res.status(404).send("Tarjeta no encontrada");
        } else {
          // Devolver la tarjeta encontrada
          res.send(result[0]); // Como solo se espera una tarjeta, se devuelve el primer resultado
        }
      }
    });
  };
  const editarTarjeta = (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion, url, tipo } = req.body;
    let imagenBase64;
  
    if (req.file) {
      // Si se proporciona una nueva imagen en la solicitud, leerla y convertirla a base64
      const imagenPath = req.file.path;
      const imagenData = fs.readFileSync(imagenPath);
      imagenBase64 = Buffer.from(imagenData).toString('base64');
    }
  
    // Realizar la actualización en la base de datos
    let sql;
    let params;
    if (imagenBase64) {
      // Si se proporciona una nueva imagen, actualizar tanto la imagen como otros datos de la tarjeta
      sql = "UPDATE tarjetas SET nombre = ?, descripcion = ?, url = ?, tipo = ?, imagen = ? WHERE id = ?";
      params = [nombre, descripcion, url, tipo, imagenBase64, id];
    } else {
      // Si no se proporciona una nueva imagen, actualizar solo otros datos de la tarjeta
      sql = "UPDATE tarjetas SET nombre = ?, descripcion = ?, url = ?, tipo = ? WHERE id = ?";
      params = [nombre, descripcion, url, tipo, id];
    }
  
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error al actualizar la tarjeta");
      } else {
        res.send("Tarjeta actualizada correctamente");
      }
    });
  };
  
const borrar=(req,res)=>{
    const userId = req.params.id;

    // Query SQL para borrar un usuario por su ID
    const sql = 'DELETE FROM tarjetas WHERE id = ?';
  
    // Ejecutar la consulta SQL con el ID del usuario
    connection.query(sql, userId, (err, result) => {
      if (err) {
        console.error('Error al borrar el usuario:', err);
        res.status(500).send('Error al borrar el usuario');
        return;
      }
      console.log('Usuario borrado correctamente');
      res.status(200).send('Usuario borrado correctamente');
    });
  }
  
  

module.exports = { insertarDatos,obtenerTarjetas,obtenerTarjetaPorId,editarTarjeta,borrar };
    