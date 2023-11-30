import { Col, Container, Row } from "react-bootstrap"
import { MdOutlineDescription } from "react-icons/md"
import { LuEuro } from "react-icons/lu"
import './HeaderExpenses.css'

const BodyExpenses = ({ handleInputOnChange }) => {

    return (

        <div className="BodyExpenses">
            <Container>
                <Row>
                    <Col xs={{ offset: 1, span: 1 }}>
                        <MdOutlineDescription className="imagen" />
                    </Col>
                    <Col xs={{ span: 6 }}>
                        <input type="text" placeholder="Descripción del pago" onChange={handleInputOnChange} />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={{ offset: 1, span: 1 }}>
                        <LuEuro className="imagen" />
                    </Col>
                    <Col xs={{ span: 6 }}>
                        <input type="number" onChange={handleInputOnChange} />
                    </Col>
                </Row>
                {/* <h3>Paid by <div className="btnWhite">you</div> and split <div className="btnWhite">equally</div></h3> */}
            </Container>
        </div>
    )
}

export default BodyExpenses