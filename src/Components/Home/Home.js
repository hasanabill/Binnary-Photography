import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import home1 from '../../images/Home/home-1.jpg'
import home2 from '../../images/Home/home-2.jpg'
import home3 from '../../images/Home/home-3.jpg'
import home4 from '../../images/Home/home-4.jpg'

const Home = () => {
    return (
        <div className='bcd'>
            <div className='abc'>
                <p className='text-white'>I am Omuk. I am a photographer <br /> I capture life.</p>
            </div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block img-fade"
                        src={home3}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fade"
                        src={home1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fade"
                        src={home2}
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
    );
};

export default Home;