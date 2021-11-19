import React from 'react'

export default function slider() {
  return (
    <div>
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
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="http://ec2-52-53-133-250.us-west-1.compute.amazonaws.com:4000/uploads/1636422890657.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Bienvenidos al Octavio Paz</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="http://ec2-52-53-133-250.us-west-1.compute.amazonaws.com:4000/uploads/1636422907546.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Bienvenidos al Octavio Paz</h5>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="http://ec2-52-53-133-250.us-west-1.compute.amazonaws.com:4000/uploads/1636422890657.jpg"
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

    </div>
  )
}
