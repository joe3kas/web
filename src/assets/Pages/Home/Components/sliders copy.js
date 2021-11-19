import React, { useEffect } from 'react'
//redux
import {fetchAllSliders} from '../../../../store/slices/slider'
import {useDispatch, useSelector} from 'react-redux'

export default function sliders() {
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000"

    const {list} = useSelector(state => state.sliders)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSliders());
    }, [dispatch])

    return (
        <div className="container">
            <div className="row">
                {
                    list.slice(0,4).map((sliders, index) => (
                        <div key={index} className="wow Fr col-3">
                            <div className="card">
                                <img
                                    src={`${url}${sliders.image}`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{sliders.titulo}</h5>
                                    <a href="#!" className="btn btn-primary">Leer Más</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
