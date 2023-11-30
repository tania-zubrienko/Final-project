import { Button, Card, Col, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import UserTrips from '../../components/UserTrips/UserTrips'

import './ProfileLinks.css'
import FriendList from '../FriendList/FriendList'
import userServices from '../../services/user.services'


const ProfileLinks = () => {
    const [userDocuments, setUserDocuments] = useState([])
    const [userTrips, setUserTrips] = useState()

    useEffect(() => {
        getDocuments() 
        getTrips()
    }, [])

    const getDocuments = () => {
        userServices
            .getDocuments()
            .then(res => setUserDocuments(res.data.documents))
            .catch(err => console.log(err))
    }

    const getTrips = () => {
        tripServices
            .getUserTrips()
            .then(res => setUserTrips(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='ProfileLinks'>
            <Row className='m-1'>
                <Col md={{ span: 8, offset: 2}}>

                    <Accordion flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Mis Documentos</Accordion.Header>
                            <Accordion.Body>
                                <Row className='justify-content-center justify-content-xl-start'>
                                { userDocuments.map((doc, i) => {
                                    return (
                                        <Col key={ i } sm={10} md={8} lg={8} xl={6} className='mt-1'>
                                            <Card>
                                                <Card.Body>
                                                    <Row className='align-items-center justify-content-center justify-content-sm-between'>
                                                        <Col xs={7} sm={6} md={6} xl={5}>
                                                            <Card.Title className='m-0'>{doc.type}</Card.Title>
                                                        </Col>
                                                        <Col xs={7} sm={5} md={6} lg={5} xxl={4}>
                                                            <Button variant="primary">Editar</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                                <Card.Img variant="bottom" src={doc.link} />
                                            </Card>
                                        </Col>
                                    )
                                })}
                                </Row>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Mis Viajes</Accordion.Header>
                            <Accordion.Body>
                                {userTrips && userTrips.map(e => <UserTrips key={e._id} tripId={e._id} destination={e.destination} date={{ end: e.endDate, start: e.startDate }} />)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Mis Amigos</Accordion.Header>
                            <Accordion.Body>
                                <FriendList />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </div >
    )

}

export default ProfileLinks