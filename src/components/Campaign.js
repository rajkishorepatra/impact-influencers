import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from '../assets/logo.jpg';

function Campaign() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 1
        }
    };
    return (
        <div className='caseStudy p-3'>
            <h1 className='my-4' id='campaigns'>Live Campaigns</h1>
            <Carousel responsive={responsive}>
                <div className='px-2'>
                    <div className='camp_data m-auto p-3 rounded' >
                        <img src={logo} alt='..' />
                        <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='camp_data m-auto p-3 rounded' >
                        <img src={logo} alt='..'  />
                        <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='camp_data m-auto p-3  rounded' >
                        <img src={logo} alt='..' />
                        <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='camp_data rounded m-auto p-3' >
                        <img src={logo} alt='..' />
                        <p className='mt-3'>From buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are coveredFrom buttons, to inputs, navbars, alerts or cards, you are covered</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Campaign