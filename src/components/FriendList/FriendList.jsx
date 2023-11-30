import './FriendList.css'
import { Button, Modal, Form, InputGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import userServices from '../../services/user.services'

const FriendList = () => {
    const [show, setShow] = useState(false)
    const [userSearch, setUserSearch] = useState('')
    const [friends, setFriends] = useState([])
    const [state, setState] = useState(false)

    const handleClose = () => {

        setUserSearch('')
        setShow(false)

    }

    const handleShow = () => {

        setUserSearch('')
        setShow(true)
        setState(!state)

    }

    const searchHandler = e => setUserSearch(e.target.value)

    useEffect(() => { getList() }, [state])

    const getList = () => {

        userServices
            .getFriendList()
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))

    }

    const handlerDeleteFriend = (e) => {
        const friendId = e.target.value
        userServices
            .deleteFriend(friendId)
            .then(getList())
            .catch(err => console.log(err))

        setState(!state)
    }

    return (

        <div>

            {friends.map((e, i) => {
                return (
                    <div className='FriendList' key={i}>
                        <div className='friendCard'>
                            <img src={e.avatar} alt='' />
                            <div className='info'>
                                <h5>{e.name}</h5>
                                <p>{e.email}</p>
                            </div>
                        </div>
                        <button className="deleteButton" value={e._id} onClick={handlerDeleteFriend}></button>
                    </div>
                )
            })}
            <div className="d-flex justify-content-center">
                <Button className='myButton2' onClick={handleShow}>
                    Añadir amigos
                </Button>
            </div>

            <Modal size='lg' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir amigos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='inputField'>
                        <label>Email :</label>
                        <input type='text' value={userSearch} onChange={searchHandler} placeholder='Email de usuario' />
                    </div>
                    <SearchBar userToFind={userSearch} friends={friends} handler={{ setState, state, }} closeModal={handleClose} />
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button className='myButton' onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FriendList