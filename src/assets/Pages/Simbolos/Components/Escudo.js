import React from 'react';
import Esc from '../../../Images/escudo.png';
export default function Escudo() {
    return (
        <>
            <div className="card mb-3 shadow-3-strong">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img width="80%" src={Esc} alt="..." className="img-fluid" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <div className="card-body">
                            <h5 className="card-title">El Escudo</h5>
                            <p className="card-text">
                                Nuestro escudo tiene forma ovalada y en su interior, encontramos tres partes: al lado
                                izquierdo se ubica el mapa de Colombia, en cuyo interior encontramos la imagen del
                                premio nobel Octavio paz; en la parte superior derecha, el libro y la pluma, insignias
                                del saber; en la división inferior de la parte derecha, encontramos dos manos
                                entrelazadas como símbolo y anhelo de la paz que promulgamos. a los lados encontramos
                                tres aros unidos. todo esto demarcado con los colores de la bandera nacional, el nombre
                                y el lema institucional aparecen en los extremos de la parte superior e inferior del
                                ovalo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
