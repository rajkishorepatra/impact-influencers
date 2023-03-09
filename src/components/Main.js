import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bgimg from '../assets/bg.jpeg'
import '../css/main.css'

function Main() {
    return (
        <>
            <Carousel fade style={{zIndex:"1"}} className="mainCarousel" controls={false} interval={2000} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-200"
                        src={bgimg}
                        alt="First slide"
                        height={1000}
                    />
                    <Carousel.Caption>
                        <h3>Debarchan Mishra</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bgimg}
                        height={1000}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Avishek Jagdev</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bgimg}
                        height={1000}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Prakruti Mishra</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Main