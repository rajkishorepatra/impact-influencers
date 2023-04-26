import React, { useState } from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import InfluencerModal from './Modals/InfluencerModal';
import OrgModal from './Modals/OrgModal';
import CampModal from './Modals/CampModal';
import influ from '../assets/influ.jpg'
// import org from '../assets/comp.jpg'
import camp from '../assets/campaign.jpg'



function JoinUs() {
    const [showInflu, setShowInflu] = useState(false);
    const [showOrg, setShowOrg] = useState(false);
    const [showCamp, setShowCamp] = useState(false);

    return (
        <>
            <Container className='joinUs'>
                <h1 className='my-4'>Join us to create an Impact!</h1>
                <Row className='mb-4'>
                    <Col>
                        <div className='p-2 d-flex justify-content-center'>
                            <img src={influ} alt="influencers" className='rounded-3' />
                        </div>
                        <div className='d-flex justify-content-center pb-4'>
                            <Button onClick={()=>setShowInflu(true)}>As an Influencer</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='p-2 d-flex justify-content-center'>
                            <img src={camp} alt="organization" className='rounded-4' />
                        </div>
                        <div className='d-flex justify-content-center pb-4'>
                            <Button onClick={()=>setShowOrg(true)}>As an Organization</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='p-2 d-flex justify-content-center'>
                            <img src={camp} alt="influencers" className='rounded-4' />
                        </div>
                        <div className='d-flex justify-content-center pb-4'>
                            <Button onClick={()=>setShowCamp(true)}>Start a Campaign</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <InfluencerModal show={showInflu} close={()=>setShowInflu(false)} />
            <OrgModal show={showOrg} close={()=>setShowOrg(false)} />
            <CampModal show={showCamp} close={()=>setShowCamp(false)} />
        </>
    )
}

export default JoinUs