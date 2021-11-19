import React from 'react'
import Perfil from '../../../Images/perfil.jpeg'
export default function Proyectos() {
  return (
    <>
      <div className="row">
        <div className="col-md-4 text-center">
          <img className="sombra" width="60%" src={Perfil} alt={Perfil} />
        </div>
        <div className="col-md-8">
          <hr />
          <strong>
            <a className="links" data-mdb-toggle="modal" href="#exampleModalToggle1" role="button">- PROYECTO DE ADMISION</a>
          </strong>
          <hr />
          <strong>
            <a className="links" data-mdb-toggle="modal" href="#exampleModalToggle2" role="button">- PROYECTO DE EDUCACIÓN SEXUAL</a>
          </strong>
          <hr />
          <strong>
            <a className="links" data-mdb-toggle="modal" href="#exampleModalToggle3" role="button">- PROYECTO COMUNITARIO</a>
          </strong>
          <hr />
          <strong>
            <a className="links" data-mdb-toggle="modal" href="#exampleModalToggle4" role="button">- ESCUELA PARA PADRES</a>
          </strong>
          <hr />
        </div>
      </div>

      <div className="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel1">PROYECTO DE ADMISION</h5>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Proceso de admisión de estudiantes nuevos.
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel1">PROYECTO DE EDUCACIÓN SEXUAL</h5>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Integrar a la sexualidad como parte del desarrollo personal y humano, y como parte del desarrollo social, prevenir embarazos no deseados, abortos y enfermedades de transmisión sexual.
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel1">PROYECTO COMUNITARIO</h5>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            Se ofrecen actividades como primera comunión, servicio social (fundaciones) y otros colegios, formación espiritual (de la mano con la iglesia), feria universitaria. 
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabIndex="-2">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel1">ESCUELA PARA PADRES</h5>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            Ofrecer a los padres de familia los recursos y habilidades, que conlleven a un crecimiento integral de los hijos y el grupo familiar. 
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
