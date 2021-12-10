const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const userController = {};

userController.verEventos = (req, res) => {
    let query = 'SELECT codigo_actividad, nombre_actividad, tipo, cupos, direccion, estado_actividad, DATE_FORMAT(fecha_inicio, "%d-%m-%Y") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%d-%m-%Y") AS fecha_termino, modalidad, descripción FROM actividades;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

userController.verEvento = (req, res) => {
    const id = req.params.id;

    let query = 'SELECT *, DATE_FORMAT(fecha_inicio, "%d-%m-%Y") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%d-%m-%Y") AS fecha_termino FROM actividades WHERE codigo_actividad = ' + id;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

userController.crearSolicitud = (req, res) => {
    const {rut_postulante,codigo_actividad,fecha_inscripcion,datos_extra,obs_medica,estado} = req.body;

    let query = 'INSERT into solicitud_deportiva SET ?'
    mysqlConn.query(query,{
        rut_postulante: rut_postulante,
        codigo_actividad: codigo_actividad,
        fecha_inscripcion: fecha_inscripcion,
        datos_extra: datos_extra,
        obs_medica: obs_medica,
        estado: estado
    }, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

userController.eliminarSolicitud = (req, res) => {
    const {id_solicitud} = req.body;
    let query = "DELETE FROM solicitud_deportiva WHERE id_solicitud = " + id_solicitud;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            console.log(err);
            res.json(err);
        }
        console.log(sql);
        res.send(sql);
    });
};

module.exports = userController;