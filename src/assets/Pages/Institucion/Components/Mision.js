import React from 'react'
import Escudo from '../../../Images/escudo.png'
export default function Mision() {
    return (
        <div className="row wow Fr">
            <div className="col-md-4 text-center"><img  width="80%" src={Escudo} alt={Escudo}/></div>
            <div className="col-md-8 d-flex align-items-center justify-content-center"><strong><p>La Institución Educativa Distrital Comunitaria Octavio Paz se integrará con las familias y
						organizaciones sociales en procesos de formación en ciudadanía y cultura para la PAZ, que
						permitan fomentar la apropiación de los valores y la transformación de la realidad socio
						cultural con la estructuración y puesta en marcha de propuestas pedagógicas, investigativas y
						comunitarias que contribuyan al desarrollo humano, social, científico y tecnológico.</p></strong></div>
        </div>
        
    )
}
