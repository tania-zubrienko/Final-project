import { Container, Row, Col } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import './Booked.css'

const Booked = () => {

    return (


        <Container>
            <div className="Booked">
                <Row >
                    <Col md={{ offset: 2, span: 2 }}>
                        Hotel IBIS
                    </Col>
                    <Col md={{ offset: 2, span: 2 }}>
                        07/08-10/08
                    </Col>
                    <Col md={{ offset: 2, span: 2 }} className="pt-3">
                        <FaRegCircleCheck />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 2, span: 2 }}>
                        RF334477
                    </Col>
                </Row>

            </div>

            <div className="Booked">
                <Row className="justify-content-center">
                    <Col md={{ offset: 2, span: 2 }}>
                        Hotel IBIS
                    </Col>
                    <Col md={{ offset: 2, span: 2 }}>
                        07/08-10/08
                    </Col>
                    <Col md={{ offset: 2, span: 2 }} className="pt-3">
                        <FaRegCircleCheck />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 2, span: 2 }}>
                        RF334477
                    </Col>
                </Row>

            </div>
        </Container >

    )
}

export default Booked