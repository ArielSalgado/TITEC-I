import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarUsuario = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState({
        
    });

    const { } = usuario;

    const onInputChange = e => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        cargarUsuario()
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/admin/modificarUsuario", usuario);
    };

    const cargarUsuario = async () => {
        const result = await Axios.get(`http://localhost:3001/api/admin/verUsuario/${id}`, usuario);
        setUsuario(result.data[0]);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Editar Usuario</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <button className="btn btn-warning btn-block">Editar Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default EditarUsuario;