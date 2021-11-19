import React from 'react'
import Escudo from '../../../Images/escudo.png'
export default function Principios() {
    return (
        <div>
            <div className="row wow Fr">
                <div className="col-md-4 text-center"><img width="90%" src={Escudo} alt={Escudo} /></div>
                <div className="col-md-8 d-flex align-items-center justify-content-center"><p> 
                    <strong>
                    La Institución Educativa Distrital Comunitaria “OCTAVIO PAZ” se orienta teniendo en cuenta:</strong>
                    <br />
                    <strong>- Desarrollo Humano Integral:</strong> Según el cual el joven es un ser en permanente evolución y perfeccionamiento, dotado de capacidades y potencialidades que lo habilitan como sujeto activo y participante de un proceso de formación de su entorno.
                    <br />
                    <strong>- Pertinencia:</strong> Según el cual los niños, y los  jóvenes poseen conocimientos, habilidades y prácticas que deben valorarse e incorporarse en el desarrollo de su proceso formativo para que de esta manera se identifiquen con el quehacer de la educación en nuestra institución, en el barrio, la ciudad, la región, el país, y el mundo.
                    <br />
                    <strong>- Flexibilidad:</strong> Según el cual las condiciones pedagógicas y administrativas deben atender el desarrollo físico y psicológico de los niños y los jóvenes, así como las características de su medio social,  cultural, laboral de quienes realizan esta última actividad.
                    <br />
                    <strong>- Participación:</strong> Según el cual el proceso formativo debe desarrollar la autonomía y responsabilidad en los niños y los  jóvenes, para que estos puedan actuar creativamente en las transformaciones económicas, sociales, políticas, científicas y culturales, para así ser partícipes de las mismas. En síntesis, se pretende desarrollar una educación humanística, centrada en  la formación de un sujeto con la capacidad de discernir y elegir autónoma y responsablemente en todos los actos de su vida y a su vez proponer alternativas de cambio positivo para los diversos ambientes de desarrollo.
                </p></div>
            </div>
        </div>
    )
}
