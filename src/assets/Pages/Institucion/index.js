import React from 'react'
import Foto from '../../Images/iniciamos.jpg'
import './Components/estilosInstitucion.css'
import Tabs from './Components/Tabs'
export default function Index() {
    return (
        <>
         <div className="">
            <img className="banner" src={Foto} alt="IEDC" />
         </div>
            <div className="container shadow-5-strong p-4">
                <Tabs />
            </div>
            <div className="p-3"></div>
        </>
    )
}
