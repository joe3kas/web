import React from 'react'
import Band from '../../../Images/bandera.jpg'

export default function Bandera() {
    return (
        <div>
            <div className="card mb-3 shadow-3-strong">
                <div className="row g-0">
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <div className="card-body">
                            <h5 className="card-title">La bandera</h5>
                            <p className="card-text">
                            Nuestra bandera tiene forma rectangular, dividida en dos franjas iguales de color blanco y azul cielo y en el centro de la misma aparece estampado el escudo de la institución
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                        width="100%"
                            src={Band}
                            alt="..."
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
