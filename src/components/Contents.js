import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from 'react-countup'
import logo from '../assets/logo.jpg'
import Testimonials from './Testimonials'
import JoinUs from './JoinUs'
import Campaign from './Campaign'
import { SmallCarousel1, SmallCarousel2, SmallCarousel3 } from './SmallCarousel'

import '../css/contents.css'
import 'react-multi-carousel/lib/styles.css'
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/pagination";



function Contents() {
    return (
        <div className='content container pb-3'>
            <Campaign/>
            <Container>
                <div className='count my-4 mb-5'>
                    <div className='countSec p-3' style={{ borderLeft: "none" }}>
                        <h1><CountUp end={20} duration={3} />+</h1>
                        <h5>Projects Completed</h5>
                        <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                    <div className='countSec p-3'>
                        <h1>$<CountUp end={20000} duration={3} />+</h1>
                        <h5>Fund raised</h5>
                        <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                    <div className='countSec p-3'>
                        <h1><CountUp end={30} duration={3} />+</h1>
                        <h5>Influencers Engaged</h5>
                        <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                    <div className='countSec p-3'>
                        <h1><CountUp end={50000} duration={3} />+</h1>
                        <h5>Reach</h5>
                        <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                </div>



                <div className='caseStudy mt-4'>
                    <h1 className='mb-4' id='caseStudy'>Case Studies</h1>
                    <Swiper
                        className="mySwiper mb-5"
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        // loop={true}
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Scrollbar, Autoplay]}
                    >
                        <SwiperSlide>
                            <Row>
                                <Col>
                                    <div>
                                        <img src={logo} alt='org logo' className='mx-auto rounded-circle' style={{ width: '40%' }} />
                                        <p>A volunteer-driven, non-profitable organization where the volunteers focus more on the groundwork that needs to be done in order to bring a change, however small it is.</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex justify-content-center mt-xl-5 pt-xl-4 mt-lg-5 pt-lg-4 mt-md-5 pt-md-5 my-3'><SmallCarousel1 /></div>
                                </Col>
                                <Col>
                                    <div>From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered. From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered</div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row>
                                <Col>
                                    <div>
                                        <img src={logo} alt='org logo' className='mx-auto rounded-circle' style={{ width: '40%' }} />
                                        <p>A volunteer-driven, non-profitable organization where the volunteers focus more on the groundwork that needs to be done in order to bring a change, however small it is.</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex justify-content-center mt-xl-5 pt-xl-4 mt-lg-5 pt-lg-4 mt-md-5 pt-md-5 my-3'><SmallCarousel2 /></div>
                                </Col>
                                <Col>
                                    <div>From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered. From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered</div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row>
                                <Col>
                                    <div>
                                        <img src={logo} alt='org logo' className='mx-auto rounded-circle' style={{ width: '40%' }} />
                                        <p>A volunteer-driven, non-profitable organization where the volunteers focus more on the groundwork that needs to be done in order to bring a change, however small it is.</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex justify-content-center mt-xl-5 pt-xl-4 mt-lg-5 pt-lg-4 mt-md-5 pt-md-5 my-3'><SmallCarousel3 /></div>
                                </Col>
                                <Col>
                                    <div>From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered.From buttons, to inputs, navbars, alerts or cards, you are covered</div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* <div className='organization' id='organizations'>
                    <div className='flipCard'>
                        <div className="front">
                            <p>Our Partners</p>
                            <Button>View More</Button>
                        </div>
                    </div>

                    <div className='orgLists'>
                        <div className='org'>
                            <img src={logo} alt='org logo' />
                            <b><h1>Youth For Sustainability</h1></b>
                            <div className='users'>
                                <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                                <p>Influencers associated:
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />+</p>
                            </div>
                        </div>
                        <div className='org'>
                            <img src={logo} alt='org logo' />
                            <h1>Youth For Sustainability</h1>
                            <div className='users'>
                                <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                                <p>Influencers associated:
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />+</p>
                            </div>
                        </div>
                        <div className='org'>
                            <img src={logo} alt='org logo' />
                            <h1>Youth For Sustainability</h1>
                            <div className='users'>
                                <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                                <p>Influencers associated:
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />+</p>
                            </div>
                        </div>
                        <div className='org'>
                            <img src={logo} alt='org logo' />
                            <h1>Youth For Sustainability</h1>
                            <div className='users'>
                                <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                                <p>Influencers associated:
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />+</p>
                            </div>
                        </div>
                        <div className='org'>
                            <img src={logo} alt='org logo' />
                            <h1>Youth For Sustainability</h1>
                            <div className='users'>
                                <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                                <p>Influencers associated:
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />
                                    <img src={profile} alt='profile' />+</p>
                            </div>
                        </div>
                    </div>

                </div> */}
                {/* <hr />
                <JoinUs />
                <hr /> */}
                {/* <Testimonials /> */}
            </Container>
        </div>
    )
}

export default Contents