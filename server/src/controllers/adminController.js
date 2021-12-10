const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const adminController = {};

adminController.verEventos = (req, res) => {
    
    let query = 'SELECT codigo_actividad, nombre_actividad, tipo, cupos, direccion, estado_actividad, DATE_FORMAT(fecha_inicio, "%d-%m-%Y") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%d-%m-%Y") AS fecha_termino, modalidad FROM actividades;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        
        res.send(sql);
    });
};

adminController.verEvento = (req, res) => {
    const id = req.params.id;

    let query = 'SELECT *,DATE_FORMAT(fecha_inicio, "%d-%m-%Y") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%d-%m-%Y") AS fecha_termino FROM actividades WHERE codigo_actividad = ' + id;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        console.log(sql)
        res.send(sql);
    });
};

adminController.verEditar = (req, res) => {
    const id = req.params.id;

    let query = 'SELECT *,DATE_FORMAT(fecha_inicio, "%Y-%m-%d") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%Y-%m-%d") AS fecha_termino FROM actividades WHERE codigo_actividad = ' + id;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        console.log(sql)
        res.send(sql);
        
    });
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
        }
        res.send(sql);
    });
};

adminController.modificarEvento = (req, res) => {
    
    const {codigo_actividad,rut_responsable, tipo, cupos, direccion, nombre_actividad, estado_actividad, descripción, fecha_inicio, fecha_termino, modalidad, requisitos, area} = req.body;

    let query = "UPDATE actividades SET ? WHERE codigo_actividad = "+ codigo_actividad;
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
        }
        res.send(sql);        
    });
};

adminController.eliminarEvento = (req, res) => {
    const codigo = req.params.id;
    console.log(req);
    let query = "DELETE FROM actividades WHERE codigo_actividad = " + codigo;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            console.log(err);
            res.json(err);
        }
        console.log(sql);
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

adminController.verSolicitudes = (req, res) => {
    let query = 'SELECT * FROM solicitud_deportiva WHERE estado = "pendiente"';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

adminController.aceptarSolicitud = (req, res) => {
    const id = req.params.id;
    let query = "UPDATE solicitud_deportiva SET estado = 'aceptada' WHERE id_solicitud = " + id;

    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });

};

adminController.rechazarSolicitud = (req, res) => {
    const id = req.params.id;
    let query = "UPDATE solicitud_deportiva SET estado = 'rechazada' WHERE id_solicitud = " + id;

    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

adminController.verUsuarios = (req, res) => {
    
    let query = 'SELECT rut,nombres,apellidos,numero_contacto,DATE_FORMAT(fecha_nacimiento, "%d-%m-%Y") AS fecha_nacimiento,prevision FROM persona;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }else{        
        res.send(sql);}
    });
};

adminController.verUsuario = (req, res) => {
    /*
    const id = req.params.id;

    let query = 'SELECT' + id;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
    */
};

adminController.modificarUsuario = (req, res) => {
    /*
    res.send("ADMIN: MODIFICAR EVENTO");
    */
};

adminController.crearUsuario = (req, res) => {
    /*
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
    */
};

module.exports = adminController;