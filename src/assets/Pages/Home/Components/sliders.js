import React, { useEffect } from 'react'
//redux
import { fetchAllSliders } from '../../../../store/slices/slider'
import { useDispatch, useSelector } from 'react-redux'

export default function sliders() {
    const url = "http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000"

    const { list } = useSelector(state => state.sliders)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSliders());
    }, [dispatch])

    return (
        <>
            <div
                id="carouselBasicExample"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >

                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/uploads/1636422890657.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenidos al Octavio Paz</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/uploads/1636496057780.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenidos al Octavio Paz</h5>
                        </div>
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </>
    )
}
