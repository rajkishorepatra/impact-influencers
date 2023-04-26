import {React} from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function InfoModal(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )}