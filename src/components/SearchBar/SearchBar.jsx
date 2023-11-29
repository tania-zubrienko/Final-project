import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import './SearchBar.css'
import userServices from '../../services/user.services'
import { useEffect, useState } from 'react'
const SearchBar = ({ userToFind }) => {

    const [foundUsers, setFoundUsers] = useState([])
    useEffect(() => { getuser() }, [userToFind])

    function getuser() {

        userServices
            .getUserData(userToFind)
            .then(result => setFoundUsers(result.data))
            .catch(err => console.log(err))
    }

    function handlerAddFriend(e) {
        const fiendId = e.target.value
        userServices
            .addFriend(fiendId)
            .then(result => console.log(result))
            .catch(err => console.log(err))

    }

    return (
        <div className='SearchBar'>
            <Container>
                <h5>Listado de usuarios</h5>
                {foundUsers.map(e => {
                    return (
                        <Row md={{ span: 6, offset: 3 }}>
                            <Col className='d-flex align-items-center userCard'>
                                <img className='userPic' src={e.avatar} alt='' />
                                <div>
                                    <p>{e.name}</p>
                                    <p>{e.email}</p>
                                </div>
                                <button className='ms-auto p-2 mybutton' value={e._id} onClick={handlerAddFriend}>Añadir</button>
                            </Col>
                            <hr />
                        </Row>
                    )
                })}

            </Container>

        </div >
    )
}

export default SearchBar