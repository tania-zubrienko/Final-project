import './Participants.css'
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineGroupAdd } from "react-icons/md";
import { useEffect, useState } from 'react';
import userServices from '../../services/user.services';
import tripServices from '../../services/trips.services';

const Participants = ({ participants, id, refresh }) => {

    const [show, setShow] = useState(false)
    const [friends, setFriends] = useState([])
    const [selectedFriends, setSelectedFriends] = useState(participants)

    const [state, setState] = useState(false)


    useEffect(() => getFriends(), [])
    useEffect(() => refresh(), [state])

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
        getFriends()
        setShow(false)
        setState(!state)
    }

    const handleAddToGroup = () => {
        tripServices
            .addParticipants(selectedFriends, id)
            .then(refresh())
            .catch(err => console.log(err))
        refresh()
        setShow(false)
        setState(!state)

    }
    const [checked, setChecked] = useState('unChecked')

    const markChecked = e => {
        const { value } = e.target
        setSelectedFriends([...selectedFriends, value])
        setState(!state)

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
                    <Modal.Title> En el grupo:</Modal.Title>
                    {participants.length > 0 &&
                        participants.map(e =>
                            <div className="userCard2" key={e._id}>
                                <img src={e.avatar} alt={e.name} />
                            </div>
                        )}
                </Modal.Header>
                <Modal.Body>
                    {friends.length > 0 && friends.map(e => {

                        return (
                            < div className="cardRow" key={e._id} >
                                <div class="d-flex text-align-center">
                                    <img src={e.avatar} alt={e.name} />
                                    <p>{e.name}</p>
                                </div>
                                <div >
                                    <button onClick={markChecked} value={e._id} >add</button>
                                </div>
                            </div>
                        )

                    }
                    )}
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
        </div >



    )
}

export default Participants