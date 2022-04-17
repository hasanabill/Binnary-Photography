import React, { useEffect, useState } from 'react';
import Service from '../Setvice/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-3'>
            <h1 className='text-center'>Services</h1>
            <div className='d-flex justify-content-center'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;