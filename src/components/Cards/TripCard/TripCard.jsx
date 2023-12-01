import { Card, Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import './TripCard.css'
import shortDate from './../../../utils/shortDate.utils'

const TripCard = ({ image, destination, startDate, endDate, id }) => {

    return (

        <Col className='mt-4 mt-5' xl={{ span: 4, offset: 1 }}>
            <Card className='trip-card'>
                <Row className='align-items-center'>
                    <Link to={`/viajes/detalles/${id}`}>
                        <Col>
                            <Card.Img variant='top' src={image} />
                        </Col>
                        <Col>
                            <Card.Title className='cardBody'>{destination}</Card.Title>
                            <Card.Text className='cardBody'>
                                Desde {shortDate(new Date(startDate))}  Hasta {shortDate(new Date(endDate))}
                            </Card.Text>
                        </Col>
                    </Link>
                </Row>
            </Card>
        </Col>

    )
}

export default TripCard