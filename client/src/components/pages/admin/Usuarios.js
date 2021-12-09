import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        const response = await Axios.get("http://localhost:3001/api/admin/verUsuarios");
        setUsuarios(response.data);
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Usuario</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Col 1</th>
                        <th scope="col">Col 2</th>
                        <th scope="col">Col 3</th>
                        <th scope="col">Col 4</th>
                        <th scope="col">Col 5</th>
                        <th scope="col">Col 6</th>
                        <th scope="col">Col 7</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    /*eventos.map((evento, index) => (
                        <tr key={index}>
                            <td>{evento.nombre_actividad}</td>
                            <td>{evento.tipo}</td>
                            <td>{evento.cupos}</td>
                            <td>{evento.direccion}</td>
                            <td>{evento.estado_actividad}</td>
                            <td>{"Desde " + evento.fecha_inicio + " hasta " + evento.fecha_termino}</td>
                            <td>{evento.modalidad}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/admin/verEvento/${evento.codigo_actividad}`}>Ver</Link>
                                <Link className="btn btn-outline-primary" to={`/admin/editarEvento/${evento.codigo_actividad}`}>Editar</Link>
                                <Link className="btn btn-danger" onClick={() => eliminarEvento(evento.codigo_actividad)}>Eliminar</Link>
                            </td>
                        </tr>
                    ))
                    */
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;