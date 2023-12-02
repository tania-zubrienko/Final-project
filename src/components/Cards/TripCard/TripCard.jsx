import { Alert, Card, Col, Row, Toast } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import './TripCard.css'
import shortDate from './../../../utils/shortDate.utils'
import tripServices from '../../../services/trips.services';
import { useEffect, useState } from 'react';

const TripCard = ({ trip, toast, refresh }) => {
    const { _id: tripId, tripImage, startDate, endDate, destination } = trip
    const [show, setShow] = useState(false)

    const deleteHandler = () => {
        setShow(true)
        tripServices
            .deleteTrip(tripId)
            .then(() => {
                refresh()   //comprobar no recarga contenido
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className='toast'>
                <Toast.Body>
                    <strong className="me-auto">Se ha eliminado el viaje a {destination}</strong>
                </Toast.Body>
            </Toast>
            <Col className='mt-4 mt-5' xl={{ span: 4, offset: 1 }}>
                <Card className='trip-card'>
                    <Row className='align-items-center'>
                        <Link to={`/viajes/detalles/${tripId}`}>
                            <Col>
                                <Card.Img variant='top' src={tripImage} />
                            </Col>
                        </Link>
                        <Col >
                            <Link to={`/viajes/detalles/${tripId}`}><Card.Title>{destination}</Card.Title></Link>
                            <Card.Text className='cardBody'>
                                Desde {shortDate(new Date(startDate))}  Hasta {shortDate(new Date(endDate))}
                                <button onClick={deleteHandler} className='delete'>Eliminar viaje</button>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card>
            </Col >
        </>
    )
}

export default TripCard