import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const VerUsuario = () => {
    const [usuario, setUsuario] = useState({

    });

    const { id } = useParams();

    useEffect(() => {
        cargarUsuario();
    });

    const cargarUsuario = async () => {
        const result = await Axios.get(`http://localhost:3001/api/admin/verUsuario/${id}`, usuario);
        setUsuario(result.data[0]);
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/admin/">Volver</Link>
            <h1 className="display-4">Nombre Usuario</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">ID Evento: {}</li>
                <li className="list-group-item">Rut Inscripción: {}</li>
                <li className="list-group-item">Tipo: {}</li>
                <li className="list-group-item">Cupos: {}</li>
                <li className="list-group-item">Dirección: {}</li>
                <li className="list-group-item">Nombre del Evento: {}</li>
                <li className="list-group-item">Estado: {}</li>
                <li className="list-group-item">Descripción: {}</li>
                <li className="list-group-item">Fecha Inicio: {}</li>
                <li className="list-group-item">Fecha Término: {}</li>
                <li className="list-group-item">Modalidad: {}</li>
                <li className="list-group-item">Requisitos: {}</li>
                <li className="list-group-item">Area: {}</li>
            </ul>
        </div>
    );
};

export default VerUsuario;