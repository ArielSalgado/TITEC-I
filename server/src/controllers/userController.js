const { mysql } = require('../config/database');
const userController = {};

userController.verEventos = (req, res) => {
    res.send("USER: VER EVENTOS");
};

userController.crearInscripcion = (req, res) => {
    res.send("USER: CREAR INSCRIPCION");
};

userController.eliminarInscripcion = (req, res) => {
    res.send("USER: ELIMINAR INSCRIPCION");
};

module.exports = userController;