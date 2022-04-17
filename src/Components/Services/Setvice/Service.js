import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = ({ service }) => {

    const { title, price, time, image, outfit, edit, serve } = service;

    return (
        <div className='mx-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> <h1>{title}</h1> </Card.Title>
                    <Card.Text>
                        <>Up to {time} hours</> <br />
                        <>{image} images</> <br />
                        <>{outfit} Outfit Changes</> <br />
                        <>{edit} Edited Images</> <br />
                        <>{serve}</> <br />
                    </Card.Text>
                    <Card.Title>   <h2 className='d-block mb-3'>${price}</h2></Card.Title>
                    <Button variant="dark">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;