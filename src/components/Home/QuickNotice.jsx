import "./QuickNotice.css";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const QuickNotice = () => {
  return (
    <>
      <div className="container my-2">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={2000}>
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              {/* Instead of image, div with style and min-height */}
              <div style={{ minHeight: 140 }}>
                <div className="carousel-caption d-block">
                  <h5>First slide label</h5>
                  <p>
                    Two B.E. programs- Rubber Technology and Computer
                    Engineering accredited by NBA for three years
                  </p>
                </div>
              </div>
              {/* end of div style min-height: 140px; */}
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              {/* Instead of image, div with style and min-height */}
              <div style={{ minHeight: 140 }}>
                <div className="carousel-caption d-block">
                  <h5>Second slide label</h5>
                  <p>
                    Instruction For the Newly Admitted First Year Students
                    2023-24
                  </p>
                </div>
              </div>
              {/* end of div style min-height: 140px; */}
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              {/* Instead of image, div with style and min-height */}
              <div style={{ minHeight: 140 }}>
                <div className="carousel-caption d-block">
                  <h5>Third slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit dolorum rerum, error tempora facere quas
                    repellendus non iusts
                  </p>
                </div>
              </div>
              {/* end of div style min-height: 140px; */}
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </>
  );
}

export default QuickNotice