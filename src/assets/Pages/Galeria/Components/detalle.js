import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './estilo.css'


export const Detalle = ({ children, estado ,cambioEstado}) => {
    return (
        <> {
            estado&&
                <div className="Ovelay">
                    <div className="modal-container">
                        <div className="">
                            <button className="btn-cerrar">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}
