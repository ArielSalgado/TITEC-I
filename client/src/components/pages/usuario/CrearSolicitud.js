import React, { useState } from 'react';
import Axios from 'axios';

const CrearSolicitud = () => {
    const [solicitud, setSolicitud] = useState({
        
    });

    const { } = solicitud;

    const onInputChange = e => {
        setSolicitud({...solicitud, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/user/crearSolicitud", solicitud);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Crear Solicitud</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="area">Area</label>
                    <input type="text" className="form-control form-control-lg" 
                    placeholder="Ingrese area de la actividad" name="area" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese nombre de la actividad" name="nombre_actividad" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="modalidad">Modalidad</label>
                    <select className="form-control form-control-lg" name="modalidad" value={""} onChange={e => onInputChange(e)} >
                        <option disabled selected value="">Seleccione una modalidad</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="tipo">Tipo de Actividad</label>
                    <select className="form-control form-control-lg" name="tipo" value={""} onChange={e => onInputChange(e)}>
                        <option disabled selected value="">Seleccione el tipo de actividad</option>
                        <option value="Evento">Evento</option>
                        <option value="Taller">Taller</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cupos">Cupos</label>
                    <input type="number" className="form-control form-control-lg"
                    placeholder="Ingrese los cupos" name="cupos" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese la dirección" name="direccion" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha_inicio">Fecha de Inicio</label>
                    <input type="date" className="form-control form-control-lg"
                    placeholder="Ingrese la fecha de inicio" name="fecha_inicio" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha_termino">Fecha de Término</label>
                    <input type="date" className="form-control form-control-lg"
                    placeholder="Ingrese la fecha de término" name="fecha_termino" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                   <label htmlFor="requisitos">Requisitos</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese los requisitos" name="requisitos" value={""} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                   <label htmlFor="descripción">Descripción</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese una descripción" name="descripción" value={""} onChange={e => onInputChange(e)} />
                </div>
                <button className="btn btn-primary btn-block">Crear Evento</button>
                </form>
            </div>
        </div>
    );
};

export default CrearSolicitud;