import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5">
            <Service></Service>
            </div>
           
        </div>
    );
};

export default Home;