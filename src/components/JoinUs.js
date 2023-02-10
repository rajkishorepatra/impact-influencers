import React from 'react'
import { Container } from 'react-bootstrap'
import influ from '../assets/influ.jpg'
import org from '../assets/comp.jpg'

function JoinUs() {
    return (
        <Container className='joinUs'>
            <h1>Join us to create an Impact!</h1>
            <div className='joinImg py-5 mx-auto'>
                <div className='imgCont py-2'>
                    <img src={influ} alt="influencers" />
                    <div className='textOnDiv'>
                        <h3>As an<br />Influencer</h3>
                    </div>
                </div>
                <div className='imgCont py-2'>
                    <img src={org} alt="organization" />
                    <div className='textOnDiv'>
                        <h3>As an<br />Organization</h3>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default JoinUs