import { Container, Row, Col } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import './Booked.css'

const Booked = () => {

    return (


        <Container>
            <div className="Booked">
                <Row>
                    <Col className="col" md={{ offset: 2, span: 2 }}>
                        <h5> RF334477 </h5>
                    </Col>
                    <Col className="col" md={{ offset: 2, span: 3 }}>
                        <h5> 07/08-10/08 </h5>
                    </Col>
                    <Col md={{ offset: 1, span: 2 }} className="col pt-3">
                        <h5><FaRegCircleCheck /> </h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col" md={{ offset: 2, span: 2 }}>
                        <h5> RF334477 </h5>
                    </Col>
                </Row>

            </div>

            <div className="Booked" >
                <Row >
                    <Col className="col" md={{ offset: 2, span: 2 }}>
                        <h5> Hotel IBIS</h5>
                    </Col>
                    <Col className="col" md={{ offset: 2, span: 3 }}>
                        <h5> 07/08-10/08 </h5>
                    </Col>
                    <Col md={{ offset: 1, span: 2 }} className="col pt-3">
                        <h5><FaRegCircleCheck /> </h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col" md={{ offset: 2, span: 2 }}>
                        <h5> RF334477 </h5>
                    </Col>
                </Row>

            </div>
        </Container >

    )
}

export default Booked