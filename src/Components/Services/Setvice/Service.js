import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { title, price, time, image, outfit, edit, serve } = service;
    const navigate = useNavigate();

    const handleBook = () => {
        navigate('/book')
    }

    return (
        <div className='col-12 col-md-4 my-3'>
            <Card className='card'>
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
                    <Button onClick={handleBook} variant="dark">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;