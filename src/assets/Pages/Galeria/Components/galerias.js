import React, { useEffect, useState } from 'react'
//redux
import { fetchAllGalerias } from '../../../../store/slices/galeria'
import { useDispatch, useSelector } from 'react-redux'
import "./estilo.css"
import { Link } from 'react-router-dom'
import { Detalle } from "./detalle"

export default function galerias() {
    const a = "#Foto"
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/"

    const { list } = useSelector(state => state.galerias)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllGalerias());
    }, [dispatch])

    const [EstadoModal, cambiarEstadoModal] = useState(false);
    return (
        <div className="grid-container">
            {list.map((galeria, index) => (
                    <div key={index} className="grid-item">
                        <div className="card">
                            <img
                                type="button"
                                data-mdb-toggle="modal"
                                data-mdb-target={`${a}${index}`}
                                width="100%"
                                src={`${url}${galeria.image}`}
                                className="card-img"
                                alt="..."
                            />
                        </div>
                    </div>
            ))
            }
            {
                list.map((galeria, index) => (
                    <div
                        key={index}
                        className="modal fade"
                        id={`Foto${index}`}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <img width="100%" src={`${url}${galeria.image}`} alt={galeria.image} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

