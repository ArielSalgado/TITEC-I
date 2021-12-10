import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

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
                <h1>Usuarios</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Rut</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Fecha de nacimiento</th>
                        <th scope="col">N° Contacto</th>                        
                        <th scope="col">Previsión</th>                        
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.rut}</td>
                            <td>{usuario.nombres}</td>
                            <td>{usuario.apellidos}</td>
                            <td>{usuario.fecha_nacimiento}</td>
                            <td>{usuario.numero_contacto}</td>
                            <td>{usuario.prevision}</td>                           
                            <td>
                                <p>algo</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;