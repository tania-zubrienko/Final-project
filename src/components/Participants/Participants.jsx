import './Participants.css'
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineGroupAdd } from "react-icons/md";
import { useEffect, useState } from 'react';
import userServices from '../../services/user.services';
import tripServices from '../../services/trips.services';

const Participants = ({ participants, id, refresh }) => {

    const [show, setShow] = useState(false)
    const [friends, setFriends] = useState([])
    const [members, setMembers] = useState(participants)

    useEffect(() => getFriends(), [])

    const getFriends = () => {
        userServices
            .getFriendList()
            .then(result => setFriends(result.data))
            .catch(err => console.log(err))
    }

    const handlerAddParticipant = () => setShow(true)

    const handleClose = () => {
        refresh()
        setShow(false)
    }

    const addMember = (e) => {
        const { value } = e.target
        setMembers([...members, value])
        refresh()
    }

    const updateGroup = () => {
        const newMembers = Array.from(new Set(members))
        tripServices
            .addParticipants(newMembers, id)
            .then(setShow(false))
            .catch(err => console.log(err))
        setMembers(participants)
        refresh()

    }

    useEffect(() => refresh(), [show])
    return (
        <div className="Participants">
            {participants.length > 0 &&
                participants.map(e => {

                    return (<div className="userCard" key={e._id}>
                        <img src={e.avatar} alt={e.name} />
                        <h5 > {e.name}</h5>
                    </div>)

                }
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
                        if (!participants.filter(elm => elm._id === e._id).length > 0) {
                            return (
                                < div className="cardRow" key={e._id} >
                                    <div class="d-flex text-align-center">
                                        <img src={e.avatar} alt={e.name} />
                                        <p>{e.name}</p>
                                    </div>
                                    <div >
                                        <button onClick={addMember} value={e._id} >add</button>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button className='myButton2' onClick={updateGroup}>
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