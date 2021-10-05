import React from 'react';
import img from "../../img/hero_img.png"
const Banner = () => {
    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-lg-6 mt-5">
                    <h1 className="my-5 py-5 fs-1 fw-bolder">Best Online Learning For your future.</h1>
                    <button className="btn btn-info btn-lg">View More</button>
                </div>
                <div className="col-lg-6">
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner; 