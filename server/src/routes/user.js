const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/verEventos', userController.verEventos);
router.get('/verEvento/:id', userController.verEvento);

router.post('/crearInscripcion', userController.crearInscripcion);

router.delete('/eliminarInscripcion', userController.eliminarInscripcion);

module.exports = router;