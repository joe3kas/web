import React, { useEffect } from 'react'
import "./estilo.css";
import noticias, { fetchAllNoticias } from '../../../../store/slices/noticias'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
export default function detalle() {
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000"

    const { list } = useSelector(state => state.noticias)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllNoticias());
    }, [dispatch])

    const { id } = useParams();

    const detalle = list.filter(noticia => noticia._id === `${id}`)
    return (
        <div className="container g-5 p-4">
            {
                detalle.map((item, index) => (
                    <div key={index} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                            width="100%"
                                src={`${url}${item.image}`}
                                alt="..."
                                className="img-fluid sombra"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{item.titulo}</h5>
                                <p className="card-text">
                                    {item.descripcion}
                                </p>
                                <p className="card-text">
                                    {item.descripcion1}
                                </p>
                                <p className="card-text">
                                    {item.descripcion2}
                                </p>
                                <p className="card-text">
                                    {item.descripcion3}
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">{item.created_at}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
