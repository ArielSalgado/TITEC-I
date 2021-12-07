const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/verEventos', adminController.verEventos);

router.post('/crearEvento', adminController.crearEvento);
router.post('/modificarEvento', adminController.modificarEvento);
router.post('/suspenderEvento', adminController.suspenderEvento);
router.post('/aceptarSolicitud', adminController.aceptarSolicitud);
router.post('/crearUsuario', adminController.crearUsuario);

router.delete('/eliminarEvento', adminController.eliminarEvento);

/* Secundario */
//router.post('/', adminController.modificarUsuario);
//router.delete('/', adminController.eliminarUsuario);

module.exports = router;