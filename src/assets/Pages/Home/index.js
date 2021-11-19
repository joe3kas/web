import React from 'react'
import './Components/estilos.css';

import Slider from './Components/sliders'
import Noticias from './Components/noticias';
import Botones from './Components/botones';

export default function index() {
    return (
        <>
            <div className="sombra">
                <Slider />
            </div>
            <br/>
            <div className="container p-2">
                <Botones />
            </div>
            <div className="container p-4 g-5">
                <Noticias />
            </div>

        </>
    )
}
