const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const adminController = {};

adminController.verEventos = (req, res) => {
    res.send("ADMIN: VER EVENTOS");
};

adminController.crearEvento = (req, res) => {
    const {rut_responsable, tipo, cupos, direccion, nombre_actividad, estado_actividad, descripción, fecha_inicio, fecha_termino, modalidad, requisitos, area} = req.body;

    let query = 'INSERT into actividades SET ?'
    mysqlConn.query(query,{
        rut_responsable: rut_responsable, 
        tipo: tipo, 
        cupos: cupos, 
        direccion: direccion, 
        nombre_actividad: nombre_actividad, 
        estado_actividad: estado_actividad, 
        descripción: descripción, 
        fecha_inicio: fecha_inicio, 
        fecha_termino: fecha_termino, 
        modalidad: modalidad, 
        requisitos: requisitos, 
        area: area
    }, (err, sql) => {
        if(err) {
            res.json(err);
        } else {
            res.send(sql);
        }
    });
};
/* 

{       
    [rut_responsable , 
        tipo , 
        cupos, 
        direccion, 
        nombre_actividad , 
        estado_actividad , 
        descripción , 
        fecha_inicio , 
        fecha_termino , 
        modalidad , 
        requisitos , 
        area]
    

        rut_responsable: rut_responsable, 
        tipo: tipo, 
        cupos: cupos, 
        direccion: direccion, 
        nombre_actividad: nombre_actividad, 
        estado_actividad: estado_actividad, 
        descripción: descripción, 
        fecha_inicio: fecha_inicio, 
        fecha_termino: fecha_termino, 
        modalidad: modalidad, 
        requisitos: requisitos, 
        area: area
    }

*/

adminController.modificarEvento = (req, res) => {
    res.send("ADMIN: MODIFICAR EVENTO");
};

adminController.eliminarEvento = (req, res) => {    
    const codigo = req.param.codigo_actividad;
    let query = "DELETE from actividades WHERE codigo_actividad = ?";
    mysqlConn.query(query,[codigo], (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

adminController.suspenderEvento = (req, res) => {
   
    const {codigo_actividad,fecha_inicio,fecha_termino} = req.body;
    //REVISAR EL UPDATE DE FECHAS POR SI SURJE ERROR
    let inicio = "UPDATE actividades SET ";
    let fechai= "fecha_inicio="+fecha_inicio+", ";
    let fechat= "fecha_termino="+fecha_termino+" WHERE codigo_actividad = ?";
    let query = inicio + fechai + fechat;

    mysqlConn.query(query,[codigo_actividad], (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

adminController.aceptarSolicitud = (req, res) => {
    
    const {id_solicitud,estado} = req.body;
    let inicio = "UPDATE solicitud_deportiva SET estado = "+estado;
    let query = inicio + " WHERE id_solicitud = ?"

    mysqlConn.query(query,[id_solicitud], (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });

};

adminController.crearUsuario = (req, res) => {
    
    const {correo,rut,contrasena,estado,codigo_tip_usa,codigo_estado} = req.body;

    let query = 'INSERT into usuario SET?';
    
    mysqlConn.query(query,{
        correo: correo,
        rut: rut,
        contrasena: contrasena,
        estado: estado,
        codigo_tip_usa: codigo_tip_usa,
        codigo_estado: codigo_estado
    },  (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });

};

module.exports = adminController;