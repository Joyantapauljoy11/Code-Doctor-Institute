import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch("./service.JSON")
        .then (res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div className="container">
            <div className="row">
            <h1 className="my-3">Our Services</h1>
            {
                services.map(service => <div className="col-lg-4">
                <div className="card" >
                <img src={service.image} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                  <p><strong>Price {service.price}</strong></p>
                 
                </div>
              </div>
              </div>)
            }

            </div>

        </div>
    );
};

export default AllServices;
