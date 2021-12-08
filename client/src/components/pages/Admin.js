import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [eventos, setEventos] = useState([]);

    const eventos1 = [
        {
            id: 1,
            nombre: "Tenis",
            instructor: "Carlos Soto",
            fecha: "Todos los Jueves a partir desde las 16:00 hasta 18:00"
        },
        {
            id: 1,
            nombre: "Tenis",
            instructor: "Carlos Soto",
            fecha: "Todos los Jueves a partir desde las 16:00 hasta 18:00"
        },
        {
            id: 1,
            nombre: "Tenis",
            instructor: "Carlos Soto",
            fecha: "Todos los Jueves a partir desde las 16:00 hasta 18:00"
        }
    ];

    useEffect(() => {
        cargarEventos();
    }, []);

    const cargarEventos = async () => {
        const eventos = await axios.get("http://localhost:3001/api/admin/verEventos");
        console.log(eventos);
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Eventos</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID Evento</th>
                        <th scope="col">Nombre Evento</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Horario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        eventos1.map((evento, index) => (
                            <tr key={index}>
                                <td scope="row">{evento.id}</td>
                                <td>{evento.nombre}</td>
                                <td>{evento.instructor}</td>
                                <td>{evento.fecha}</td>
                                <td>
                                    <Link className="btn btn-primary">Ver</Link>
                                    <Link className="btn btn-outline-primary">Editar</Link>
                                    <Link className="btn btn-danger">Eliminar</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;