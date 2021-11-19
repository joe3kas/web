import React from 'react'
import './Components/estiloSimbolos.css'
import Foto from '../../Images/iniciamos.jpg'
import Bandera from './Components/Bandera'
import Escudo from './Components/Escudo'
import Himno from './Components/Himno'

export default function index() {
    return (
        <>
            <div>
                <img className="banner" src={Foto} alt="IEDC" />
            </div>
            <div className="p-2"></div>
            <div className="container g-2 wow B">
                <Bandera />
            </div>
            <div className="p-2"></div>
            <div className="container g-2 wow B">
                <Escudo />
            </div>
            <div className="p-2"></div>
            <div className="container g-2 wow B text-center">
                <Himno />
            </div>
            <div className="p-2"></div>
        </>
    )
}
