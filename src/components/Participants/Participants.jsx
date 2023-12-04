import './Participants.css'
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineGroupAdd } from "react-icons/md";
import { useState } from 'react';
import userServices from '../../services/user.services';
import tripServices from '../../services/trips.services';

const Participants = ({ participants, id }) => {

    const [show, setShow] = useState(false)
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        userServices
            .getFriendList()
            .then(result => setFriends(result.data))
            .catch(err => console.log(err))
    }

    const handlerAddParticipant = () => {
        setShow(true)
        getFriends()
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleAddToGroup = () => {

        tripServices
            .addParticipants(selectedFriends, id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setShow(false)
    }

    const [selectedFriends, setSelectedFriends] = useState([participants])

    const handleCheckboxChange = e => {
        const { value } = e.target
        console.log(value)
        setSelectedFriends([...selectedFriends, value])
    }

    return (
        <div className="Participants">
            {participants.length > 0 &&
                participants.map(e =>
                    <div className="userCard" key={e._id}>
                        <img src={e.avatar} alt={e.name} />
                        <h5 > {e.name}</h5>
                    </div>
                )}
            <button className='addToGroupButton' onClick={handlerAddParticipant}><p><MdOutlineGroupAdd /></p></button>


            <Modal size='lg' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir amigos</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button className='myButton2' onClick={handleAddToGroup}>
                        Añadir al grupo
                    </Button>
                    <Button className='myButton' onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>



    )
}

export default Participants