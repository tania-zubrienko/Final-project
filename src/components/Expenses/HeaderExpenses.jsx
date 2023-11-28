import { Col, Container, Row } from "react-bootstrap"
import cabeceraProvisional from './../../assets/cabeceraProvisional.jpeg'
import './HeaderExpenses.css'

const HeaderExpenses = () => {

    return (
        <div className="HeaderExpenses">
            <Container className="mb-5">
                <Row className="mb-5">
                    <h1>Add Expense</h1>
                    <Col md={4}>
                        <h3>With you and</h3>
                    </Col>
                    <Col md={6}>
                        <div className="where">
                            <figure>
                                <img src={cabeceraProvisional} alt="" />
                            </figure>
                            <h5>All of Mexico City</h5>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    )

}

export default HeaderExpenses