import { Col, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import UserTrips from '../../components/UserTrips/UserTrips'

import './ProfileLinks.css'
import FriendList from '../FriendList/FriendList'


const ProfileLinks = () => {
    const [userTrips, setUserTrips] = useState()

    useEffect(() => {

        tripServices
            .getUserTrips()
            .then(res => setUserTrips(res.data))
            .catch(err => console.log(err))

    }, [])

    const fakeTrips = [
        {
            destination: 'Madrid',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Barcelona',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        }]

    return (
        <div className='ProfileLinks'>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                    <Accordion flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Mis Documentos</Accordion.Header>
                            <Accordion.Body>
                                aqui los docs
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