import { faAddressCard, faLaptopCode, faPhotoVideo, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import "./estilos.css"
export default function botones() {
    return (
        <div className="shadow-5 text-center wow Fr">
            <div className="grid-container-home">
                <div className="grid-item-home">
                    <a href="https://www.sismac.info/">
                        <h5 className="icon nav-item"><FontAwesomeIcon icon={faLaptopCode} /></h5>
                        <h5>sismac</h5>
                    </a>
                </div>
                <div className="grid-item-home">
                    <Link to="/galeria">
                        <h5 className="icon nav-item"><FontAwesomeIcon icon={faPhotoVideo} /></h5>
                        <h5>Galeria</h5>
                    </Link>
                </div>
                <div className=" grid-item-home">
                    <Link to="/docentes">
                        <h5 className="icon nav-item"><FontAwesomeIcon icon={faUsers} /></h5>
                        <h5>Nuestro Equipo</h5>
                    </Link>
                </div>
                <div className="grid-item-home">
                    <Link to="/Contacto">
                        <h5 className="icon nav-item"><FontAwesomeIcon icon={faAddressCard} /></h5>
                        <h5>Contacto.</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}
