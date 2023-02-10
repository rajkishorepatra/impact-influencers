import React from 'react'
import { Button, Container } from 'react-bootstrap'
import CountUp from 'react-countup'
import '../css/contents.css'
import logo from '../assets/logo.jpg'
import profile from '../assets/profile.png'
import Testimonials from './Testimonials'
import JoinUs from './JoinUs'
function Contents() {
    return (
        <div className='content pb-3'>
            <Container>
                <div className='count'>
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


                <div className='organization' id='organizations'>
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

                </div>
                <hr/>
                <JoinUs/>
                <hr/>
                <Testimonials/>
            </Container>
        </div>
    )
}

export default Contents