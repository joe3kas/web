import React, { useEffect } from 'react'
//redux
import { fetchAllDocentes } from '../../../../store/slices/docente'
import { useDispatch, useSelector } from 'react-redux'
import "./estilo.css"

export default function Docentes() {
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/"

    const { list } = useSelector(state => state.docentes)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllDocentes());
    }, [dispatch])

    return (
            <div className="grid-container">
                {
                    list.map((docentes, index) => (
                        <div key={index} class="grid-item">
                            <div className="card">
                                <img
                                loading="lazy"
                                    src={`${url}${docentes.image}`}
                                    className="cArd card-img-top"
                                    alt="..."
                                />
                                    <div className="card-body text-center">
                                    <p className="card-title">{docentes.nombre}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}
