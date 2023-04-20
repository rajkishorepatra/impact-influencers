import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import bgimg from '../assets/bg.jpeg'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import logo from '../assets/logo.jpg';


import '../css/main.css'

function Main() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
    };

    return (
        <>
            <Slider {...settings} className='w-50 h-100'>
                <div>
                    <div className='px-2'>
                        <div className='camp_data m-auto p-3' >
                            <img src={logo} alt='..' />
                            <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-2'>
                        <div className='camp_data m-auto p-3 rounded' >
                            <img src={logo} alt='..' />
                            <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-2'>
                        <div className='camp_data m-auto p-3 rounded' >
                            <img src={logo} alt='..' />
                            <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-2'>
                        <div className='camp_data m-auto p-3 rounded' >
                            <img src={logo} alt='..' />
                            <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                        </div>
                    </div>
                </div>
            </Slider >
        </>
    )
}

export default Main