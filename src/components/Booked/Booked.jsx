import { Container, Row, Col } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import './Booked.css'
import shortDate from "../../utils/shortDate"

const Booked = ({ booked }) => {

    return (
        booked &&
        <Container>
            <div className="Booked">
                <Row>
                    <Col className="col" md={{ offset: 2, span: 2 }}>
                        <h5> { booked.name } </h5>
                    </Col>
                    <Col className="col" md={{ offset: 2, span: 3 }}>
                            <h5> {shortDate(new Date(Date.parse(booked.startDate)))}-{shortDate(new Date(Date.parse(booked.endDate)))} </h5>
                    </Col>
                    <Col md={{ offset: 1, span: 2 }} className="col pt-3">
                        <h5><FaRegCircleCheck /> </h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col" md={{ offset: 2, span: 2 }}>
                        <h5> { booked.type } </h5>
                    </Col>
                </Row>
            </div>
        </Container >
    )
}

export default Booked