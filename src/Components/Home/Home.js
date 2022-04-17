import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import home1 from '../../images/Home/home-1.jpg'
import home2 from '../../images/Home/home-2.jpg'
import home3 from '../../images/Home/home-3.jpg'
import home4 from '../../images/Home/home-4.jpg'
import { Link } from 'react-router-dom';
import Services from './../Services/Services/Services';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div className='position-relative'>
                <div className='position-absolute top-50 start-50 translate-middle abc'>
                    <p className='text-white'>I am Omuk. I am a photographer <br /> I capture life.</p>

                    <Link className='text-decoration-none border text-white rounded  py-2 px-3' to='/gallary'>Discover</Link>
                </div>
                <Carousel interval='2000' fade>
                    <Carousel.Item>
                        <img
                            className="d-block img-fade"
                            src={home1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fade"
                            src={home2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fade"
                            src={home3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fade"
                            src={home4}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;