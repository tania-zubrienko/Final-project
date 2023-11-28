import { Col, Container, Row } from "react-bootstrap"
import { MdOutlineDescription } from "react-icons/md"
import { LuEuro } from "react-icons/lu"
import './HeaderExpenses.css'

const BodyExpenses = () => {

    return (

        <div className="BodyExpenses">
            <Container>
                <Row>
                    <Col xs={{ offset: 1, span: 1 }}>
                        <MdOutlineDescription className="imagen" />
                    </Col>
                    <Col xs={{ span: 6 }}>
                        <input type="text" placeholder="Descripción del pago" />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={{ offset: 1, span: 1 }}>
                        <LuEuro className="imagen" />
                    </Col>
                    <Col xs={{ span: 6 }}>
                        <input type="number" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BodyExpenses