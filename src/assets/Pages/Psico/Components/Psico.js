import React from 'react';
import Perfil from '../../../Images/perfil.jpeg';

export default function Psico() {
    return (
        <div className="row wow SiR">
            <div className="col-md-4 text-center">
                <img className="sombra" width="80%" src={Perfil} alt={Perfil} />
            </div>
            <div className="col-md-8">
                
                <hr/>
                <strong>María Beneditta Huelva Huelva</strong><br />
                        Trabajadora social<br />
                        Especialista en familia y neuropsicopedagogia.<br />
                        Con 20 años de experiencia como orientadora escolar en el sector público.
                        <hr/>
                        <strong>- LUNES- MIERCOLES – VIERNES.</strong>
                        <br />
                        Jornada Matinal.
                        <hr/>
                        <strong>- MARTES – JUEVES.</strong>
                        <br />
                        Jornada Vespertina.
                        <hr/>
                      <strong>  Contacto</strong> <br />
                        <a href="https://api.whatsapp.com/send?phone=573007397530&text=Hola,%20ni%20nombre%20es:%20">300 7397530</a>
                         <br/>
                        <strong className="links">benehuelva@hotmail.com</strong>
                        <hr/>
            </div>
        </div>
    );
}
