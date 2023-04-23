import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from '../assets/logo.jpg';
import img from '../assets/image.png';
import { useState } from 'react';
import InfoModal from './Modals/InfoModal';

function Campaign() {
    const [showInfo, setShowInfo] = useState(false);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 1
        }
    };
    return (
        <>
        <div className='caseStudy p-3 car'>
            <h1 className='my-4' id='campaigns'>Live Campaigns</h1>
            <Carousel responsive={responsive} partialVisbile={false}>
                <div class='img__wrap'>
                    <img src={img} alt='dummy'/>
                    <div class='divp'>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam sint sunt totam facilis? Consequatur.\n'}
                        <a href='javascript:void(0)' onClick={() => setShowInfo(true)}>See More</a>
                        </p>
                    </div> 
                </div>
                <div class='img__wrap'>
                    <img src={img} alt='dummy'/>
                    <div class='divp'>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam sint sunt totam facilis? Consequatur.\n'}
                        <a href='javascript:void(0)' onClick={() => setShowInfo(true)}>See More</a>
                        </p>
                    </div>
                </div>
                <div class='img__wrap'>
                    <img src={img} alt='dummy'/>
                    <div class='divp'>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam sint sunt totam facilis? Consequatur.\n'}
                        <a href='javascript:void(0)' onClick={() => setShowInfo(true)}>See More</a>
                        </p>
                    </div>
                </div>
                <div class='img__wrap'>
                    <img src={img} alt='dummy'/>
                    <div class='divp'>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam sint sunt totam facilis? Consequatur.\n'}
                        <a href='javascript:void(0)' onClick={() => setShowInfo(true)}>See More</a>
                        </p>
                    </div>
                </div>
                <div class='img__wrap'>
                    <img src={img} alt='dummy'/>
                    <div class='divp'>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam sint sunt totam facilis? Consequatur.\n'}
                        <a href='javascript:void(0)' onClick={() => setShowInfo(true)}>See More</a>
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>

        <InfoModal show={showInfo} close={()=>setShowInfo(false)} />
    </>
    )
}

export default Campaign