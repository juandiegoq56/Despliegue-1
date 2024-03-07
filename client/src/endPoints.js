const express = require('express');
const multer = require('multer');
const router  = express.Router();
const {login} = require('../controllers/loginControllers');
const {users} = require('../controllers/usersControllers')
const { loginAD } = require('../controllers/loginControllersAd')
const {insertarDatos,obtenerTarjetas, obtenerTarjetaPorId,editarTarjeta,borrar}=require('../controllers/createTarget')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'image'); // Directorio donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
    }
  });
  const upload = multer({ storage: storage });
router.post('/login',loginAD);
router.get('/usuarios',obtenerTarjetas);   
router.get('/usuarios/:id', obtenerTarjetaPorId); 
router.put('/usuarios/:id',upload.single('imagen'),editarTarjeta)
router.post('/create', upload.single('imagen'), insertarDatos);
router.delete('/usuarios/:id',borrar)
router.post('/admin',users)
module.exports = router;