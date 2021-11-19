import React from 'react'
import Escudo from '../../../Images/escudo.png'
export default function Vision() {
    return (
        <div className="row wow Fr">
            <div className="col-md-4 text-center"><img width="80%" src={Escudo} alt={Escudo} /></div>
            <div className="col-md-8 d-flex align-items-center justify-content-center"><strong><p>La INSTITUCIÓN EDUCATIVA DISTRITAL COMUNITARIA OCTAVIO PAZ,    
                    será reconocida en el año 2026,  por su proyección a la comunidad, 
                    contribuyendo a la transformación del contexto familiar en sus dimensiones afectivas, 
                    económicas, y culturales, que incidan en mejorar la calidad de los procesos de enseñanza
                    - aprendizaje con la integración de propuestas pedagógicas que permiten coadyuvar 
                    al desarrollo humano y social hacia la construcción de la  paz.</p></strong></div>
        </div>
    )
}
