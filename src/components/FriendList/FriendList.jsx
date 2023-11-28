import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import profileImg from '../../assets/profileDefault.png'
import { useState } from 'react';
import './FriendList.css'
import SearchBar from '../SearchBar/SearchBar';

const FriendList = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='main'>
            <div className="FriendList">
                <img src={profileImg} alt="" />
                <div className="info">
                    <h5>Name</h5>
                    <p>Email</p>
                </div>
            </div>
            <Button className='myButton2' onClick={handleShow}>
                Añadir amigos
            </Button>
            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir amigos</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
                        <Form.Control placeholder="Email de usuario" />
                    </InputGroup>

                    <SearchBar />

                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button className='myButton2' onClick={handleClose}>
                        Añadir
                    </Button>
                    <Button className='myButton' onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FriendList