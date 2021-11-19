import React from 'react'
import Perfil from '../../../Images/perfil.jpeg'

export default function Programas() {
    return (
        <>
            <div className="row">
                <div className="col-md-4 text-center">
                    <img className="sombra" width="60%" src={Perfil} alt={Perfil} />
                </div>
                <div className="col-md-8">
                    <hr />
                    <strong>
                        <a data-mdb-toggle="modal" href="#Modal1" role="button">- PROGRAMA SALUD EN LA ESCUELA</a>
                    </strong>
                    <hr />
                    <strong>
                        <a data-mdb-toggle="modal" href="#Modal2" role="button">- APOYO A LA CONVIVENCIA</a>
                    </strong>
                    <hr />
                    <strong>
                        <a data-mdb-toggle="modal" href="#Modal3" role="button">- ORIENTACIÓN VOCACIONAL </a>
                    </strong>
                    <hr />
                    <strong>
                        <a data-mdb-toggle="modal" href="#Modal4" role="button">- PAE </a>
                    </strong>
                    <hr />
                    <strong>
                        <a data-mdb-toggle="modal" href="#Modal5" role="button">- ACOMPAÑAMIENTO A DOCENTE DE APOYO </a>
                    </strong>
                    <hr />
                </div>
            </div>
            <div className="modal fade" id="Modal1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel1">PROGRAMA SALUD EN LA ESCUELA</h5>
                                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            Ofrece actividades de salud e higiene personal
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="Modal2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel1">APOYO A LA CONVIVENCIA</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Ofrecer acompañamiento a los estudiantes con dificultades disciplinarias y comportamentales. 
Apoyo con docentes, coordinadores y gestora de convivencia. 
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="Modal3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel1">ORIENTACIÓN VOCACIONAL</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Se ofrecen charlas sobre orientación vocacional y profesional.  
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="Modal4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel1">PAE</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Coordinación al programa de alimentación escolar. 
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="Modal5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel1">ACOMPAÑAMIENTO A DOCENTE DE APOYO</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Acompañamiento a la docente de apoyo, estudiante con dificultades (diagnosticados). 
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
