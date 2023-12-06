import { Button, Card, Col, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import UserTrips from '../UserTrips/UserTrips'

import './ProfileContent.css'
import FriendList from '../FriendList/FriendList'
import userServices from '../../services/user.services'
import DocumentCard from './DocumentCard/DocumentCard'


const ProfileContent = () => {
    const [userDocuments, setUserDocuments] = useState([])
    const [userDni, setUserDni] = useState()
    const [userPassport, setUserPassport] = useState()
    const [userLicense, setUserLicense] = useState()
    const [userInsurance, setUserInsurance] = useState()
    const [userTrips, setUserTrips] = useState()

    useEffect(() => {
        getDocuments()
        getTrips()
    }, [])

    useEffect(() => {
        setUserDni(userDocuments.find(doc => doc.type === 'DNI'))
        setUserPassport(userDocuments.find(doc => doc.type === 'Pasaporte'))
        setUserLicense(userDocuments.find(doc => doc.type === 'Carnet'))
        setUserInsurance(userDocuments.find(doc => doc.type === 'Seguro'))
    }, [userDocuments])

    function getDocuments() {
        userServices
            .getDocuments()
            .then(res => setUserDocuments(res.data.documents))
            .catch(err => console.log(err))
    }

    function getTrips() {
        tripServices
            .getUserTrips()
            .then(res => setUserTrips(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='ProfileContent'>
            <Row className='m-1'>
                <Col md={{ span: 8, offset: 2 }}>

                    <Accordion flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Mis Documentos</Accordion.Header>
                            <Accordion.Body>
                                <Row className='justify-content-center justify-content-xl-start'>
                                    <DocumentCard type={'DNI'} getDocuments={getDocuments}>{userDni}</DocumentCard>
                                    <DocumentCard type={'Pasaporte'} getDocuments={getDocuments}>{userPassport}</DocumentCard>
                                    <DocumentCard type={'Carnet'} getDocuments={getDocuments}>{userLicense}</DocumentCard>
                                    <DocumentCard type={'Seguro'} getDocuments={getDocuments}>{userInsurance}</DocumentCard>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Mis Viajes</Accordion.Header>
                            <Accordion.Body>
                                {userTrips && userTrips.map(e => <UserTrips tripImage={e.tripImage} key={e._id} tripId={e._id} destination={e.destination} date={{ end: e.endDate, start: e.startDate }} />)}
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

export default ProfileContent