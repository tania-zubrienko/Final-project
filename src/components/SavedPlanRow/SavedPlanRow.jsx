import { Col, Row, Modal } from 'react-bootstrap'
import { IoLocationOutline } from 'react-icons/io5'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import './SavedPlanRow.css'
import { useEffect, useState } from 'react'
import PlanDetails from '../PlanDetails/PlanDetails'
import { Link } from 'react-router-dom'
import tripServices from '../../services/trips.services'
import placeServices from '../../services/places.services'

const SavedPlanRow = ({ myPlans, refresh }) => {

    const [showModal, setShowModal] = useState(false)
    const [currentPlace, setCurrentPlace] = useState()
    const [currentId, setCurrentId] = useState("")

    function createModal(){

        setShowModal(true)

    }

    function getPlaceInfo(e){

        const { value } = e.target
        const buttonId = e.target.id
        setCurrentId(buttonId)
        placeServices
            .getPlaceInfo(value)
            .then(res => setCurrentPlace(res.data))
            .catch(err => console.log(err))

    }

    // const getCurrentId = (id) => {
    //     setCurrentId(id)
    // }

    const refreshInfo = () => {
        refresh()
        setShowModal(false)
    }


    return (
        <div className='SavedPlanRow' >

            <Row className='align-items-center' onClick={createModal}>
                {myPlans.map(e => {
                    return (
                        <Col md={{ span: 3, offset: 1 }}>
                            <div className='d-flex  text-align-center align-items-center'>
                                <p><IoLocationOutline className='icon' /></p>
                                <button id={e._id} value={e.placeId} onClick={getPlaceInfo} className='placeLink'>{e.name}</button>
                            </div>
                        </Col>)
                })}
            </Row>

            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Detalle del Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <PlanDetails placeInfo={currentPlace} currentId={currentId} refreshInfo={refreshInfo} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default SavedPlanRow