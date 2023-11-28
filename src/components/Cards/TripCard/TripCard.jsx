import { Card, Col, Container, Row } from "react-bootstrap"

import { Link } from "react-router-dom";
import './TripCard.css'

const TripCard = ({ image, destination, startDate, endDate }) => {
    return (

        <Col className="mt-4 mt-5" xl={{ span: 4, offset: 1 }}>
            <Card className="trip-card">
                <Row className="align-items-center">
                    <Col>
                        <Card.Img variant="top" src={image} />
                    </Col>
                    <Col>
                        <Card.Title>{destination}</Card.Title>
                        <Card.Text>
                            {startDate} / {endDate}
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
        </Col>

    )
}

export default TripCard