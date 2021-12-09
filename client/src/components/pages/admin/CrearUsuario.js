import React, { useState } from 'react';
import Axios from 'axios';

const CrearUsuario = () => {
    const [usuario, setUsuario] = useState({
        
    });

    const { } = usuario;

    const onInputChange = e => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/admin/crearUsuario", usuario);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Crear Usuario</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <button className="btn btn-primary btn-block">Crear Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default CrearUsuario;