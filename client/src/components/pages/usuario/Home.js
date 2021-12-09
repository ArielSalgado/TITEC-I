import React, { useState, useEffect } from 'react';
import Card from '../../layout/Card';
import Axios from 'axios';

const Home = () => {
    /*
    const [eventos, setEventos] = useState([]);
    const [cards, setCards] = useState([]);
    var items = [];

    useEffect(() => {
        cargarEventos();
        cargarCards();
    }, []);

    const cargarEventos = async () => {
        const response = await Axios.get("http://localhost:3001/api/user/verEventos");
        setEventos(response.data());
    };

    const cargarCards = async () => {
        eventos.map((evento) => {
            items.push(
                <Card imgsrc={evento.ruta} nombre={evento.nombre} desc={evento.desc} id_evento={evento.id} />
            );
        });
    }
    */

    return (
        <div className="container">
            <div className="py-4">
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <Card imgsrc={"logo512.png"} nombre={"futbol"} desc={"Descripcion ..."} id_evento={"1"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;