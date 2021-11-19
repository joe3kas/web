import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faMobile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Logo from '../Images/escudo.png'
import './estilo.css'
import { NavLink } from 'react-router-dom';
export default function navbar() {
    return (
        <>

            <nav>
                <ul className="main-nav">
                    <li className="Li"><img width="100px" src={Logo} alt="logo" /></li>
                    <li className="Li"><FontAwesomeIcon icon={faEnvelopeOpen} /> tec_iedc.octaviopaz@sedbarranquilla.edu.co</li>
                    <li className="Li"><FontAwesomeIcon icon={faMobile} /> 3622595 - 3642430</li>
                </ul>
            </nav>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/"> Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Nuestra institución
                                </a>
                                <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink className="dropdown-item" activeClassName="Active" tag="a" exact to="/Institucion">Institución</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" activeClassName="Active" tag="a" exact to="/Reseña">Reseña Histórica</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item p-1" activeClassName="Active" tag="a" exact to="/Simbolos">Simbolos Institucionales</NavLink>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <NavLink className="dropdown-item" activeClassName="Active" tag="a" exact to="/Manual">Manual de Convivencia</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/Honor">  Cuadro de Honor</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/Docentes">Cuerpo Docente</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/Orientacion">  Psico-Orientación</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/Noticias">  Noticias</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/Galeria">  Galeria</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="Active" exact to="/Contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
