import { Col, Row, Modal } from 'react-bootstrap'
import { IoLocationOutline } from 'react-icons/io5'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import './SavedPlanRow.css'
import { useEffect, useState } from 'react'
import PlanDetails from '../PlanDetails/PlanDetails'
import { Link } from 'react-router-dom'
import tripServices from '../../services/trips.services'
import placeServices from '../../services/places.services'

//myPlans
const SavedPlanRow = ({ myPlans }) => {

    const [showModal, setShowModal] = useState(false)
    const [currentPlace, setCurrentPlace] = useState()

    const createModal = () => {
        setShowModal(true)
    }

    const getPlaceInfo = e => {

        const { value } = e.target

        placeServices
            .getPlaceInfo(value)
            .then(res => setCurrentPlace(res.data))
            .catch(err => console.log(err))

        // tripServices
        //     .getPlaceInfo(value)
        //     .then(res => setCurrentPlace(res.data))
        //     .catch(err => console.log(err))
    }


    return (

        <div className='SavedPlanRow' >

            <Row className='align-items-center' onClick={createModal}>
                {myPlans.map(e => {

                    return (
                        <Col md={{ span: 3, offset: 1 }}>
                            <div className='d-flex  text-align-center align-items-center'>

                                <p><IoLocationOutline className='icon' /></p>

                                <button value={e.placeId} onClick={getPlaceInfo} className='placeLink'>{e.name}</button>

                            </div>
                        </Col>)

                })}
            </Row>

            {/* {
                myPlans.map(elm => {
                    return (

                        <Row className='align-items-center' onClick={createModal}>
                            <Col xs={1}>
                                <IoLocationOutline className='icon' />
                            </Col>
                            <Col xs={10} sm={9}>
                                <h5>{elm.name}</h5>
                                <p>{elm.abierto}</p>
                            </Col>
                            <Col sm={2}>
                                <img className='plan-img' src={elm.photo} alt='' />
                            </Col>
                        </Row>
                    )
                }
                )
            } */}

            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Detalle del Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <PlanDetails placeInfo={currentPlace} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default SavedPlanRow