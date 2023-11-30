import './SearchBar.css'
import addIcon from './../../assets/add.png'
import { Col, Container, Row } from 'react-bootstrap'
import userServices from '../../services/user.services'
import { useEffect, useState } from 'react'

const SearchBar = ({ userToFind, friends, handler }) => {

    const [foundUsers, setFoundUsers] = useState([])
    useEffect(() => { getuser() }, [userToFind])


    const [friendList, setFriendList] = useState(friends)
    function getuser() {

        userServices
            .getUserData(userToFind)
            .then(result => setFoundUsers(result.data))
            .catch(err => console.log(err))
    }

    function handlerAddFriend(e) {
        handler()
        const fiendId = e.target.value
        userServices
            .addFriend(fiendId)
            .then((res) => setFriendList(...friends, res))
            .catch(err => console.log(err))
    }

    return (
        <div className='SearchBar'>
            <Container>
                <h5>Listado de usuarios</h5>
                {foundUsers.map(e => {
                    if (!friends.filter(elm => elm.email === e.email).length > 0) {
                        return (
                            <Row md={{ span: 6, offset: 3 }}>
                                <Col className='d-flex justify-content-between ' >
                                    <div className='userCard'>
                                        <img className='userPic' src={e.avatar} alt='' />
                                        <div>
                                            <p>{e.name}</p>
                                            <p>{e.email}</p>
                                        </div>
                                    </div>
                                    <button className="iconButton" value={e._id} onClick={handlerAddFriend}>
                                        <img src={addIcon} alt="añadir" />
                                    </button>
                                </Col>
                            </Row>
                        )
                    }

                })}

            </Container>

        </div >
    )
}

export default SearchBar