import React, { useEffect } from 'react'
//redux
import {fetchAllNoticias} from '../../../../store/slices/noticias'
import {useDispatch, useSelector} from 'react-redux'
import "./estilo.css"
import { Link } from 'react-router-dom'
import noticia from "./noticia";

export default function noticias() {
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/"

    const {list} = useSelector(state => state.noticias)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllNoticias());
    }, [dispatch])

    return (
            <div className="grid-container">
                {
                    list.map((noticias, index) => (
                        <div key={index} className="grid-item">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{noticias.titulo}</h5>
                                </div>
                                <img
                                    src={`${url}${noticias.image}`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                 <div className="card-body btn-outline-light d-grid gap-2">
                                    <Link to={"noticia/"+noticias._id} className="btn btn-outline-info btn-rounded">Leer más</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}
