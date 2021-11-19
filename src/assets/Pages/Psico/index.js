import React from 'react'
import './Components/estiloPsico.css'
import Foto from '../../Images/iniciamos.jpg'
import Tabs from './Components/Tabs'

export default function index() {
    return (
        <>
            <div>
                <img className="banner" src={Foto} alt="IEDC" />
            </div>
            <div className="container shadow-5-strong p-4">
                <Tabs />
            </div>
            <div className="p-3"></div>
        </>
    )
}
