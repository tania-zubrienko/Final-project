import { Card, Col, Row } from "react-bootstrap"
import './TripCard.css'

const TripCard = ({ image, destination, startDate, endDate }) => {
    return (
        <Col className="mt-4" xs={12} md={6} xl={4}>
            <Card className="trip-card">
                <Row className="align-items-center">
                    <Col>
                        <Card.Img variant="top" src={ image } />
                    </Col>
                    <Col>
                            <Card.Title>{ destination }</Card.Title>
                            <Card.Text>
                                { startDate } / { endDate }
                            </Card.Text>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default TripCard