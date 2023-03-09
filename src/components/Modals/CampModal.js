import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';


export default function CampModal(props) {
    return (
        <>
            {/* Start a campaign modal starts */}

            <Modal show={props.show} onHide={props.close} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Start a Campaign</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e)=>e.preventDefault()}>
                    <Modal.Body>
                        <th scope="row" className="pl-2 border-0 py-2 pr-0 d-flex justify-content-between">
                            <Form.Label className="pt-2">Name: </Form.Label>
                            <div className='pl-2'>
                                <Form.Control className="w-60" type="text" placeholder="Your name" name="orgName" />
                            </div>
                        </th>
                        <th scope="row" className="pl-2 border-0 py-2 pr-0 d-flex justify-content-between">
                            <Form.Label className="pt-2 pr-4">Email: </Form.Label>
                            <div className='pl-2'>
                                <Form.Control className="w-60" type="email" placeholder="Your email" name="orgName" />
                            </div>
                        </th>
                        <th scope="row" className="pl-2 border-0 py-2 pr-0 d-flex justify-content-between">
                            <Form.Label className="pt-2 pr-4">Email:</Form.Label>
                            <div className='pl-2'>
                                <Form.Control className="w-60" type="text" placeholder="Your name" name="orgName" />
                            </div>
                        </th>
                        <th scope="row" className="pl-2 border-0 py-2 pr-0 d-flex justify-content-between">
                            <Form.Label className="pt-2 pr-4">Email: </Form.Label>
                            <div className='pl-2'>
                                <Form.Control className="w-60" type="text" placeholder="Your name" name="orgName" />
                            </div>
                        </th>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={props.close} type="submit">
                            Submit
                        </Button>
                        <Button onClick={props.close} variant="secondary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            {/* Start a campaign modal ends */}
        </>
    )
}
