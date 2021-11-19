import React, { useEffect } from 'react'
//redux
import { fetchAllHonors } from '../../../../store/slices/honor'
import { useDispatch, useSelector } from 'react-redux'
import "./estilos.css"

export default function honors() {
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/"

    const { list } = useSelector(state => state.honors)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllHonors());
    }, [dispatch])

    const Pacade = list.filter(honor => honor.nivel === 'primaria' && ((honor.motivo === 'academico')|| (honor.motivo === 'académico')))
    const Pconvi = list.filter(honor => honor.nivel === 'primaria' && honor.motivo === 'convivencia')
    const Sacade = list.filter(honor => honor.nivel === 'secundaria' && ((honor.motivo === 'academico') || (honor.motivo === 'académico')))
    const Sconvi = list.filter(honor => honor.nivel === 'secundaria' && honor.motivo === 'convivencia')
    const Nacade = list.filter(honor => honor.nivel === 'nocturna' && ((honor.motivo === 'academico')|| (honor.motivo === 'académico')))
    const Nconvi = list.filter(honor => honor.nivel === 'nocturna' && honor.motivo === 'convivencia')
    return (
        <>
            <div className="container p-4 p-md-5">
                <div className="row">
                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Primaria
                                </button>
                            </h2>

                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-mdb-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="container">
                                        <div className="row">
                                            {
                                                Pconvi.map((item, index) => (
                                                    <div key={index} className="col-md">
                                                        <strong>Nombre: {item.nombre}</strong>
                                                        <p>Grado: {item.grado}º</p>
                                                        <p>Motivo: {item.motivo}</p>
                                                    </div>
                                                ))}
                                            {
                                                Pacade.map((item, index) => (
                                                    <div key={index} className="col-md">
                                                       <strong>Nombre: {item.nombre}</strong>
                                                        <p>Grado: {item.grado}º</p>
                                                        <p>Motivo: {item.motivo}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Secundaria
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-mdb-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="container">
                                        <div className="row">
                                            {
                                                Sconvi.map((item, index) => (
                                                    <div key={index} className="col-md">
                                                       <strong>Nombre: {item.nombre}</strong>
                                                        <p>Grado: {item.grado}º</p>
                                                        <p>Motivo: {item.motivo}</p>
                                                    </div>
                                                ))}
                                            {
                                                Sacade.map((item, index) => (
                                                    <div key={index} className="col-md">
                                                       <strong>Nombre: {item.nombre}</strong>
                                                        <p>Grado: {item.grado}º</p>
                                                        <p>Motivo: {item.motivo}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Nocturna
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-mdb-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="container">
                                        <div className="row">
                                            {
                                                Nconvi.map((item, index) => (
                                                    <div key={index} className="col-md">
                                                       <strong>Nombre: {item.nombre}</strong>
                                                        <p>Grado: {item.grado}º</p>
                                                        <p>Motivo: {item.motivo}</p>
                                                    </div>
                                                ))}
                                            {
                                                Nacade.map((item, index) => (
                                                    <div key={index} className="col-md">
                                                       <strong>Nombre: {item.nombre}</strong>
                                                        <p>Grado: {item.grado}º</p>
                                                        <p>Motivo: {item.motivo}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
