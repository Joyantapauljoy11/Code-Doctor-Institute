import React, { useEffect, useState } from 'react';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./service.JSON")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // conditonal rendaring for display service in home page
    const displayService = services.filter(service=> service.condition ==="false" )
    return (
        <div className="row my-5">
                 <h1 className="text-center mt-5">Find the right course for you</h1>
                 <p className="text-center mb-3">Online learning offers a new way to explore subjects you’re passionate about.</p> 
                 {
                     displayService.map(item => 
                     <div className="col-lg-4">
                     <div className="card" >
                     <img src={item.image} class="card-img-top" alt="..."/>
                     <div className="card-body">
                       <h5 className="card-title">{item.name}</h5>
                       <p className="card-text">{item.description}</p>
                       <p><strong>Price {item.price}</strong></p>
                      
                     </div>
                   </div>
                   </div>)
                 }           
        </div>
    );
};

export default Service;