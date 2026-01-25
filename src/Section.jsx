import React from "react";
import "./Web.css";
export default function Section() {
  return (
    <>
    <div id="carouselExample" className="carousel slide mt-4" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="./images/img4.jpg" className="d-block w-100 img-w" alt="Slide 1" />
          <div className="carousel-caption custom-caption text-start">
            <div className="caption-box">
              <h1 className="slide-anim delay-1">ship <br />
                software <br />
                solutions <br />
                FOR THE MARITIME ENTERPRISE</h1>

              <button className="btn btn-primary slide-anim delay-3">Get Started</button>
            </div>
          </div>

        </div>

        <div className="carousel-item">
          <img src="./images/imgg1.jpeg" className="d-block w-100 img-w" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src="./images/imgg2.jpeg" className="d-block w-100 img-w" alt="Slide 3" />
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>

    <div className="task-asst">
      <p>TASK ASSITANT <br /><span>software that works</span></p>
    </div>
</>
  );
}
