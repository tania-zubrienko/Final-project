import './SearchBar.css'
import { Col, Container, Row } from 'react-bootstrap'
import userServices from '../../services/user.services'
import { useEffect, useState } from 'react'

const SearchBar = ({ userToFind, friends, handler, closeModal, refresh }) => {
    const { state, setState } = handler
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

        closeModal()

        const fiendId = e.target.value
        userServices
            .addFriend(fiendId)
            .then((res) => {
                setFriendList(...friends, res)
                refresh()
            })
            .catch(err => console.log(err))
        console.log("estoy en searchbar", state)


    }

    return (
        <div className='SearchBar'>
            <Container>
                <h5>Listado de usuarios</h5>
                {foundUsers.map(e => {
                    if (!friends.filter(elm => elm.email === e.email).length > 0) {
                        return (
                            <Row md={{ span: 6, offset: 3 }} className='mb-3'>
                                <Col className='d-flex justify-content-between align-items-center' >
                                    <div className='userCard'>
                                        <img className='userPic' src={e.avatar} alt='' />
                                        <div>
                                            <p>{e.name}</p>
                                            <p>{e.email}</p>
                                        </div>
                                    </div>
                                    <button className='addButton' value={e._id} onClick={handlerAddFriend} ></button>
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