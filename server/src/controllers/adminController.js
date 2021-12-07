const { mysql } = require('../config/database');
const adminController = {};

adminController.verEventos = (req, res) => {
    res.send("ADMIN: VER EVENTOS");
};

adminController.crearEvento = (req, res) => {
    res.send("ADMIN: CREAR EVENTO");
};

adminController.modificarEvento = (req, res) => {
    res.send("ADMIN: MODIFICAR EVENTO");
};

adminController.eliminarEvento = (req, res) => {
    res.send("ADMIN: ELIMINAR EVENTO");
};

adminController.suspenderEvento = (req, res) => {
    res.send("ADMIN: SUSPENDER EVENTO");
};

adminController.aceptarSolicitud = (req, res) => {
    res.send("ADMIN: ACEPTAR SOLICITUD");
};

adminController.crearUsuario = (req, res) => {
    res.send("ADMIN: CREAR USUARIO");
};

module.exports = adminController;